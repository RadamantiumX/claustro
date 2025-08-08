import { PrismaClient } from '@prisma/client'

/**
 * Instance of Prisma ORM Client
 * Singleton mode PRISMA ORM
 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

// TODO: handle al env variable to: TEST, DEV, PRODUCTION
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" ){
    globalForPrisma.prisma = prisma;
} else{
    {} as PrismaClient = prisma
}

