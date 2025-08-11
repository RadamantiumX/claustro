import { UserColabRepository } from "../../../repository/userColabRepository";
import { prismaMock } from "../../setup";
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

   await expect(userColabRepository.createUserColab({username:userColab.username, password: userColab.password})).resolves.toBe(Promise<void>)
})