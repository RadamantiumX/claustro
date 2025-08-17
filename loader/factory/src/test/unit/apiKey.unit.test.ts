import { ApiKeyRepository } from './../../repository/apiKeyRepository';
import { prismaMock } from "../setup";
import { it, expect, beforeEach, describe } from "vitest";
import { mockApiKey } from "../mockedData";
import { timeStampParsed } from "../../helper/timeStampParser";

/**
 * Testing REPOSITORIES FILES
 */

describe('ApiKeyRepository',()=>{
  let apiKeyRepository:ApiKeyRepository


  beforeEach(()=>{
   apiKeyRepository = new ApiKeyRepository(prismaMock)
})



it('should create new apiKey',async ()=>{

   prismaMock.apiKeys.create.mockResolvedValueOnce(mockApiKey)
   const mockedApiKey = await apiKeyRepository.createApiKey({
                apiKey: mockApiKey.apiKey,
                apiKeySecret: mockApiKey.apiKeySecret,
                bearerToken: mockApiKey.bearerToken,
                accessToken: mockApiKey.accessToken,
                accessTokenSecret: mockApiKey.accessTokenSecret,
                apiDataId: mockApiKey.apiDataId,
                dataId: mockApiKey.dataId
})
   
   expect(mockedApiKey).toEqual(undefined) // <-- Mocking VOID behavior

   // Mocking Prisma Properties
   expect(prismaMock.apiKeys.create).toHaveBeenCalledWith({
      data: {
                apiKey: mockApiKey.apiKey,
                apiKeySecret: mockApiKey.apiKeySecret,
                bearerToken: mockApiKey.bearerToken,
                accessToken: mockApiKey.accessToken,
                accessTokenSecret: mockApiKey.accessTokenSecret,
                apiDataId: mockApiKey.apiDataId,
                dataId: mockApiKey.dataId
      }
   })
})

it('should return unique apiKey',async ()=>{

   prismaMock.apiKeys.findUnique.mockResolvedValueOnce(mockApiKey)
   const mockedApiKey = await apiKeyRepository.getUnique({
            id: mockApiKey.id
})
   
   expect(mockedApiKey).toEqual(expect.objectContaining(mockApiKey))

   // Mocking Prisma Properties
   expect(prismaMock.apiKeys.findUnique).toHaveBeenCalledWith({
      where: {id:mockApiKey.id},
            select: {
                id: true,
                apiKey: true,
                apiKeySecret: true,
                bearerToken: true,
                accessToken: true,
                accessTokenSecret: true,
            }
   })
})




it('should update data',async ()=>{

   prismaMock.apiKeys.update.mockResolvedValue(mockApiKey)
   const mockedApiKey = await apiKeyRepository.updateApiKey({
    id: mockApiKey.id,
    apiKey: mockApiKey.apiKey,
    apiKeySecret: mockApiKey.apiKeySecret,
    bearerToken: mockApiKey.bearerToken,
    accessToken: mockApiKey.accessToken,
    accessTokenSecret: mockApiKey.accessTokenSecret
})
   expect(mockedApiKey).toEqual(undefined)

   // Mocking Prisma Properties
   expect(prismaMock.apiKeys.update).toHaveBeenCalledWith({
     where:{ id: mockApiKey.id },
      data:{
             apiKey: mockApiKey.apiKey,
             apiKeySecret: mockApiKey.apiKeySecret,
             bearerToken: mockApiKey.bearerToken,
             accessToken: mockApiKey.accessToken,
             accessTokenSecret: mockApiKey.accessTokenSecret,
             updatedAt: timeStampParsed()
          }
   })
})

it('should delete data',async ()=>{

   prismaMock.apiKeys.delete.mockResolvedValue(mockApiKey)
   const mockedApiKey = await apiKeyRepository.destroyApiKey({ id: mockApiKey.id })

   expect(mockedApiKey).toEqual(undefined)

   // Mocking Prisma Properties
   expect(prismaMock.apiKeys.delete).toHaveBeenCalledWith({
      where:{ id: mockApiKey.id }
   })
})

})





