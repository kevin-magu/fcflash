"use server";

import { prisma } from "@/lib/prisma";
import z from "zod";
import { redirect } from "next/navigation";
import { S3Client, PutObjectCommand} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
})

if (!process.env.AWS_S3_BUCKET_NAME) {
    throw new Error("Missing S3 bucket name");
}

const RegisterSchema = z.object({
    role: z.enum(["player", "official", "sponsor"]),
    name: z.string().min(2, "Name is too short"),
    gender: z.string().min(1, "Please select a gender"),
    dob: z.string().transform((str) => new Date(str)),
    phone: z.string().min(10,"Invalid phone number"),
    email: z.string().email("Invalid email address")
})

export async function registerUser(formData: FormData){
    const rawData = {
        role: formData.get("role"),
        name: formData.get("name"),
        gender: formData.get("gender"),
        dob: formData.get("dob"),
        phone: formData.get("phone"),
        email: formData.get("email"),
    }

    //EXTRACT the photo file
    const photoFile = formData.get("photo") as File 

    if(!photoFile || photoFile.size === 0) {
        throw new Error("Photo is required");
    }

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if(!validTypes.includes(photoFile.type)){
        throw new Error("Invalid file type");
    }

    let photoUrl = "";
    const result = RegisterSchema.safeParse(rawData);

if (!result.success) {
    throw new Error(result.error.issues[0].message);
}


const validatedData = result.data;

    try {
        // convert file t
        const bytes = await photoFile.arrayBuffer();
        const buffer = Buffer.from(bytes)

        // create unique filename
        const fileExtension = photoFile.name.split(".").pop();
        const uniqueFileName = `avatars/${Date.now()}-${validatedData.name.replace(/\s+/g, "-").toLowerCase()}.${fileExtension}`;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME!,
            Key: uniqueFileName,
            Body: buffer,
            ContentType: photoFile.type,
            ACL: "public-read"
        });

        await s3Client.send(command)
        photoUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueFileName}`

    } catch (error: any) {
    console.error("S3 Upload Error:", error);
    throw new Error(`S3 Upload failed: ${error.message}`);
    }

    try {
        await prisma.user.create({
            data: {
                role: validatedData.role,
                name: validatedData.name,
                gender: validatedData.gender,
                dob: validatedData.dob,
                phone: validatedData.phone,
                email: validatedData.email,
                photoUrl: photoUrl 
            }
            
        })
        return { success: true };
    } catch (error: any) {
        if(error.code === 'P2002'){
            throw new Error("This email is already registered with US")
        }
        throw new Error(`"Something went wrong with the registration", ${error}`)
    }
}