import { ApiDataRepository } from "../../repository/apiDataRepository";
import { prismaMock } from "../setup";
import { it, vi, expect, expectTypeOf, beforeEach, describe } from "vitest";
import { timeStampParsed } from "../../helper/timeStampParser";

/**
 * Testing REPOSITORIES FILES
 */

describe('ApiDataRepository',()=>{
  let apiDataRepository:ApiDataRepository


  beforeEach(()=>{
   apiDataRepository = new ApiDataRepository(prismaMock)
})

// UserColab MOCKED
const mockApiData = {
  id: 1,
  appName: 'appnamemock',
  dataId:1,
  appId: 'apidmock',
  createdAt: new Date(Date.now()),
  updatedAt: new Date(Date.now())
}

it('should create new apiData',async ()=>{

   prismaMock.apiData.create.mockResolvedValueOnce(mockApiData)
   const mockedApiData = await apiDataRepository.createApiData({appName:'appnamemock',dataId:1,appId:'apidmock'})
   
   expect(mockedApiData).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.apiData.create).toHaveBeenCalledWith({
      data: {
         appName:'appnamemock',
         dataId:1,
         appId:'apidmock'
      }
   })
})

it('should return a unique ApiData',async ()=>{

   prismaMock.apiData.findUnique.mockResolvedValueOnce(mockApiData)
   const mockedApiData = await apiDataRepository.getUnique({ id:1 })
   
   expect(mockedApiData).toEqual(expect.objectContaining({appName:"appnamemock", appId:"apidmock" })) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.apiData.findUnique).toHaveBeenCalledWith({
      where: {
         id: 1
      },
      select:{
         appName: true,
         appId: true
      }
   })
})

it('should update ApiData',async ()=>{

   prismaMock.apiData.update.mockResolvedValueOnce(mockApiData)
   const mockedApiData = await apiDataRepository.updateApiData({ id: 1,appName: 'appnamemock',appId: 'apidmock' }) // Omit<ApiData, "createdAt" | "updatedAt" | "dataId">
   
   expect(mockedApiData).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.apiData.update).toHaveBeenCalledWith({
      where: {
         id: 1
      },
      data:{
         appName: 'appnamemock',
         appId: 'apidmock'
      }
   })
})

})





