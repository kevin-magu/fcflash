"use server";

import { prisma } from "@/lib/prisma"
import z from "zod"
import { redirect } from "next/navigation"

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

    const validatedData = RegisterSchema.parse(rawData);

    try {
        await prisma.user.create({
            data: {
                role: validatedData.role,
                name: validatedData.name,
                gender: validatedData.gender,
                dob: validatedData.dob,
                phone: validatedData.phone,
                email: validatedData.email
            }
        })
    } catch (error: any) {
        if(error.code === 'P2002'){
            throw new Error("This email is already registered with US")
        }
        throw new Error(`"Something went wrong with the registration", ${error}`)
    }
    redirect("/register/success");
}