import { UserColabRepository } from "../../repository/userColabRepository";
import { prismaMock } from "../setup";
import { it, vi, expect, expectTypeOf, beforeEach, describe } from "vitest";


/**
 * Testing REPOSITORIES FILES
 */

describe('UserColabRepository',()=>{
  let userColabRepository:UserColabRepository


  beforeEach(()=>{
   userColabRepository = new UserColabRepository(prismaMock)
})

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

it('should create new userColab',async ()=>{

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

it('should return unique UserColab',async ()=>{
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

   prismaMock.userColab.create.mockResolvedValue(mockUserColab)
   const newUser = await userColabRepository.getUnique({username:'usecolabmock'})
   
   expect(newUser).toEqual({id:'asas',username: 'usecolabmock', password:'testingmock123', isSuperAdmin: false})
   /*expect(prismaMock.userColab.create).toHaveBeenCalledWith({
      data: {
         username: 'usecolabmock',
      }
   })*/
})

})





