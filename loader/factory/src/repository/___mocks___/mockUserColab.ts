import { UserColabRepository } from "../userColabRepository";
import { prismaMock } from "../../test/setup";
import { it, vi, expect } from "vitest";

const userColabRepository = new UserColabRepository()

it('sould create new user', async () => {
   
   const userColab = {
    username: 'usecolabmock',
    password: 'testingmock123'
   }

   prismaMock.userColab.create.mockResolvedValue(userColab)
})