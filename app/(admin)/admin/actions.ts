"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { redirect } from "next/navigation";

const FixtureSchema = z.object({
  homeTeam: z.string().min(2),
  awayTeam: z.string().min(2),
  date: z.string().transform((str) => new Date(str)),
  time: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/),
  location: z.string().min(2),
});

export async function createFixture(formData: FormData) {
  const rawData = {
    homeTeam: formData.get("homeTeam"),
    awayTeam: formData.get("awayTeam"),
    date: formData.get("date"),
    time: formData.get("time"),
    location: formData.get("location"),
  };

  const validatedData = FixtureSchema.parse(rawData);

  try {
    await prisma.fixture.create({
      data: {
        homeTeam: validatedData.homeTeam,
        awayTeam: validatedData.awayTeam,
        date: validatedData.date,
        time: validatedData.time,
        location: validatedData.location,
        status: "UPCOMING",
        homeScore: 0,
        awayScore: 0,
      },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new Error("This fixture already exists");
    }
    throw new Error(`Something went wrong: ${error}`);
  }

  redirect("/admin");
}