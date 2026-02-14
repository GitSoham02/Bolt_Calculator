import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

console.log('[Prisma] Initializing Prisma client...');
console.log('[Prisma] DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('[Prisma] NODE_ENV:', process.env.NODE_ENV);
console.log('[Prisma] Is Vercel:', !!process.env.VERCEL);

if (!process.env.DATABASE_URL) {
  throw new Error(
    '[Prisma] DATABASE_URL is not defined in environment variables',
  );
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  console.log('[Prisma] Using global Prisma instance for development');
}

console.log('[Prisma] Prisma client initialized');

export default prisma;
