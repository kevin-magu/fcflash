-- CreateEnum
CREATE TYPE "Status" AS ENUM ('UPCOMING', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Fixture" (
    "id" TEXT NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "homeScore" INTEGER DEFAULT 0,
    "awayScore" INTEGER DEFAULT 0,
    "status" "Status" NOT NULL DEFAULT 'UPCOMING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fixture_pkey" PRIMARY KEY ("id")
);
