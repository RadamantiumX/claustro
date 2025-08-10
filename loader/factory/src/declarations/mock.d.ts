import { PrismaClient } from "@prisma/client";
import { mockDeep, DeepMockProxy } from "vitest-mock-extended";

export type Context = {
    prisma: PrismaClient
}

export type MockContext = {
    prisma: DeepMockProxy<PrismaClient>
}

