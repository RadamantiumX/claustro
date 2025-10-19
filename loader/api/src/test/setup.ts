// Singleton SETUP
import { mockReset, mockDeep, DeepMockProxy } from 'vitest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { vi, beforeEach } from 'vitest';
import prisma from '../config/prismaClient';

vi.mock('../config/prismaClient', ()=>{
   return{
      __esModule: true,
      default: mockDeep<PrismaClient>()
   }
})



beforeEach(()=>{
    mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>