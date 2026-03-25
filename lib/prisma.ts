// lib/prisma.ts   (or src/lib/prisma.ts)

import { PrismaClient } from './generated/prisma/client';   // ← CHANGE THIS to match your output path in schema.prisma
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

// WebSocket polyfill for local development (macOS + Neon)
if (process.env.NODE_ENV === 'development') {
  (global as any).WebSocket = ws;
}

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;

  console.log("🛠️ Attempting to connect. String length:", connectionString?.length || 0);

  if (!connectionString || connectionString.trim() === '') {
    throw new Error('❌ DATABASE_URL is empty or missing! Check your .env file.');
  }

  // Recommended way for Neon in Prisma 7
  const adapter = new PrismaNeon({
    connectionString,
  });

  return new PrismaClient({
    adapter,
    // Optional: enable query logging during development
    // log: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'],
  });
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}