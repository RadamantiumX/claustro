import { UserColabRepository } from "../userColabRepository";
import { prismaMock } from "../../test/setup";
import { it, vi, expect } from "vitest";


const userColabRepository = new UserColabRepository()

it('sould create new user', async () => {
   
   const userColab = {
    id:'asas',  
    username: 'usecolabmock',
    email: "user@mock.com",
    password: 'testingmock123',
    lastSignIn: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isSuperAdmin: false,

   }

   prismaMock.userColab.create.mockResolvedValue(userColab)
})