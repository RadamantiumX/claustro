import { PrismaClient } from '@prisma/client'

/**
 * Instance of Prisma ORM Client
 * Singleton mode PRISMA ORM
 */

let prisma:PrismaClient;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

prisma = globalForPrisma.prisma || new PrismaClient();

// TODO: handle al env variable to: TEST, DEV, PRODUCTION
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" ){
    globalForPrisma.prisma = prisma;
} else{
   prisma = {} as PrismaClient 
}

export default prisma