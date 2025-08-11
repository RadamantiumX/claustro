// Singleton SETUP
import { mockReset, mockDeep, DeepMockProxy, mockClear } from 'vitest-mock-extended';
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
    mockClear(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>