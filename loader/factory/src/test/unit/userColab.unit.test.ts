
import { UserColabRepository } from "../../repository/userColabRepository";
import { prismaMock } from "../setup";
import { it, vi, expect, expectTypeOf, beforeEach, describe } from "vitest";
import { mockReset } from "vitest-mock-extended";

/**
 * Testing REPOSITORIES FILES
 */

describe('UserColabRepository',()=>{
  let userColabRepository:UserColabRepository

  beforeEach(()=>{
   userColabRepository = new UserColabRepository(prismaMock)
})

it('should create new userColab',async ()=>{
const mockUserColab = {
    id:'asas',  
    username: 'usecolabmock',
    email: "user@mock.com",
    password: 'testingmock123',
    lastSignIn: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isSuperAdmin: false,
   }

   prismaMock.userColab.create.mockResolvedValueOnce(mockUserColab)
   const newUser = await userColabRepository.createUserColab({username: 'usecolabmock', password: 'testingmock123'})
   
   expect(newUser).toEqual(undefined) // <-- Mocking VOID behavior
   expect(prismaMock.userColab.create).toHaveBeenCalledWith({
      data: {
         username: 'usecolabmock',
         password: 'testingmock123'
      }
   })
})
})





