import { DataRepository } from "../../repository/dataRepository";
import { prismaMock } from "../setup";
import { it, expect, beforeEach, describe } from "vitest";
import { mockData, mockDataNested } from "../mockedData";

/**
 * Testing REPOSITORIES FILES
 */

describe('DataRepository',()=>{
  let dataRepository:DataRepository


  beforeEach(()=>{
   dataRepository = new DataRepository(prismaMock)
})



it('should create new data',async ()=>{

   prismaMock.data.create.mockResolvedValueOnce(mockData)
   const mockedData = await dataRepository.createData({
            emailSource: mockData.emailSource,
            emailSourcePsw: mockData.emailSourcePsw,
            xUser: mockData.xUser,
            xPsw: mockData.xPsw,
            userColabId: mockData.userColabId
})
   
   expect(mockedData).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.data.create).toHaveBeenCalledWith({
      data: {
           emailSource: mockData.emailSource,
            emailSourcePsw: mockData.emailSourcePsw,
            xUser: mockData.xUser,
            xPsw: mockData.xPsw,
            userColabId: mockData.userColabId
      }
   })
})

it('should return unique data',async ()=>{

   prismaMock.data.findUnique.mockResolvedValueOnce(mockData)
   const mockedData = await dataRepository.getUnique({
            id: mockData.id
})
   
   expect(mockedData).toEqual(mockDataNested) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.data.findUnique).toHaveBeenCalledWith({
      where:{ id: mockData.id },
        select:{
            id: true,
            emailSource:true,
            xUser: true,
            apiData: {
                select: {
                    id:true,
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
                    id: true,
                    apiKey: true,
                    apiKeySecret: true,
                    bearerToken: true,
                    accessToken: true,
                    accessTokenSecret: true
                }
            }
        }
   })
})


})





