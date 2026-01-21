import { UserColabRepository } from "../../repository/userColabRepository";
import { prismaMock } from "../setup";
import { it, expect, beforeEach, describe } from "vitest";
import { timeStampParsed } from "../../helper/timeStampParser";
import { mockUserColab } from "../mockedData";
import { email } from "envalid/dist";
/**
 * Testing REPOSITORIES FILES
 */

describe('UserColabRepository',()=>{
  let userColabRepository:UserColabRepository


  beforeEach(()=>{
   userColabRepository = new UserColabRepository(prismaMock)
})



it('should create new userColab',async ()=>{

   prismaMock.userColab.create.mockResolvedValueOnce(mockUserColab)
   const mockedUser = await userColabRepository.createUserColab({username: 'usecolabmock', password: 'testingmock123'})
   
   expect(mockedUser).toEqual(undefined) // <-- Mocking VOID behavior

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
   const mockedUser = await userColabRepository.getUniqueUsername({username:'usecolabmock'})

   expect(mockedUser).toEqual(expect.objectContaining({id:'asas',username: 'usecolabmock', password:'testingmock123', isSuperAdmin: false}))

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
   const mockedUser = await userColabRepository.updateUserColab({username:'usecolabmock', email:'mailer@mail.com'})

   expect(mockedUser).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.userColab.update).toHaveBeenCalledWith({
      where:{
         username:'usecolabmock'
      },
      data:{
         username: 'usecolabmock',
         email:'mailer@mail.com',
         updatedAt: timeStampParsed()
      }
   })
})

it('should delete UserColab',async ()=>{
   prismaMock.userColab.delete.mockResolvedValueOnce(mockUserColab)
   const mockedUser = await userColabRepository.destroyUserColab({id:'asas'})

   expect(mockedUser).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.userColab.delete).toHaveBeenCalledWith({
      where:{
         id:'asas'
      }
   })
})


})





