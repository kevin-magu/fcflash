import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// 1. Mandatory for local development on macOS to reach Neon via WebSockets
if (process.env.NODE_ENV === 'development') {
  neonConfig.webSocketConstructor = ws;
}

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('❌ DATABASE_URL is missing from .env');
  }

  // 2. Initialize the Neon connection pool
  const pool = new Pool({ connectionString });
  
  // 3. Create the adapter (Standard in Prisma 7+)
  const adapter = new PrismaNeon(pool as any);

  // 4. Instantiate the client with the adapter
  return new PrismaClient({ adapter });
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;