"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getFixtures(searchTerm: string){
    try {
        return await prisma.fixture.findMany({
            where : {
                status: 'UPCOMING',

                OR: [
                    { homeTeam: {contains: searchTerm, mode: "insensitive"} },
                    { awayTeam: {contains: searchTerm, mode: "insensitive"} },
                    { location: {contains: searchTerm, mode: "insensitive"} },
                ],
            },
            orderBy: {
                date: 'asc'
            }, 
        });
    } catch (error) {
        console.error("Database Error", error);
        return [];
    }
}

export async function updateFixtureStatus(id: string, newStatus: "COMPLETED" | "CANCELLED"){
    try {
        await prisma.fixture.update({
            where: { id },
            data: { status: newStatus },
        });
        revalidatePath("/admin/fixtures");
    } catch (error) {
        throw new Error("Failed to update fixture status");
    }
}