import { UserColabRepository } from "../../repository/userColabRepository";
import { prismaMock } from "../setup";
import { it, vi, expect, expectTypeOf, beforeEach, describe } from "vitest";
import { timeStampParsed } from "../../helper/timeStampParser";

/**
 * Testing REPOSITORIES FILES
 */

describe('UserColabRepository',()=>{
  let userColabRepository:UserColabRepository


  beforeEach(()=>{
   userColabRepository = new UserColabRepository(prismaMock)
})

// UserColab MOCKED
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

   // Mocking Prisma Properties
   expect(prismaMock.userColab.create).toHaveBeenCalledWith({
      data: {
         username: 'usecolabmock',
         password: 'testingmock123'
      }
   })
})

it('should return unique UserColab',async ()=>{
   prismaMock.userColab.findUnique.mockResolvedValueOnce(mockUserColab)
   const newUser = await userColabRepository.getUnique({username:'usecolabmock'})

   expect(newUser).toEqual(expect.objectContaining({id:'asas',username: 'usecolabmock', password:'testingmock123', isSuperAdmin: false}))

   // Mocking Prisma Properties
   expect(prismaMock.userColab.findUnique).toHaveBeenCalledWith({
      where:{
         username:'usecolabmock'
      },
      select:{ id: true, username: true, password: true, isSuperAdmin: true }
   })
})

it('should update UserColab',async ()=>{
   prismaMock.userColab.update.mockResolvedValueOnce(mockUserColab)
   const newUser = await userColabRepository.updateUserColab({id:'asas',username:'usecolabmock', password:'testingmock123',isSuperAdmin:false})

   expect(newUser).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.userColab.update).toHaveBeenCalledWith({
      where:{
         id:'asas'
      },
      data:{
         username: 'usecolabmock',
         password: 'testingmock123',
         isSuperAdmin: false,
         updatedAt: timeStampParsed()
      }
   })
})

})





