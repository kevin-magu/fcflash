"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import StatusEmail from "@/emails/StatusEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fetch only users with a "PENDING" status
export async function getPendingUsers(query: string = "") {
  try {
    return await prisma.user.findMany({
      where: {
        status: "PENDING",
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { role: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "asc" },
    });
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

// Update the user's status to ACCEPTED or REJECTED
export async function updateUserStatus(id: string, status: "ACCEPTED" | "REJECTED") {
  try {
    // 1. Capture the updated user data from Prisma
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { status },
    });

    console.log(`Attempting to send email to: ${updatedUser.email}`);
    
    // 2. Use 'updatedUser' for the email
    try {
      await resend.emails.send({
        from: "Flash FC Admin <info@fcflash.com>", 
        to: updatedUser.email,
        // Match the check to "ACCEPTED"
        subject: status === "ACCEPTED" ? "Welcome to Flash FC!" : "Update on your Flash FC Registration",
        // Cast status to any if your StatusEmail component expects "APPROVED" specifically
        react: StatusEmail({ name: updatedUser.name, status: status }),
      });
    } catch (emailError) {
      // Log the error but don't stop the process since the DB is already updated
      console.error("Failed to send email, but user was updated in DB:", emailError);
    }
    
    revalidatePath("/admin/approvals"); 
    return { success: true };

  } catch (error) {
    console.error("Failed to update user status:", error);
    return { success: false, error: "Failed to update status" };
  }
}