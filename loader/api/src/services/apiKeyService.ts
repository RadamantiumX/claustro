import type { IApiKeyRepository, ApiKeyMethods, ApiKey } from "../types/index";
import { ApiKeyRepository } from "../repository/apiKeyRepository";
import prisma from "../config/prismaClient";
import { TRPCError } from "@trpc/server";

export class ApiKeyService{
    private static instance:ApiKeyService;
    apiKeyRepository:IApiKeyRepository;
    apiKey:ApiKeyMethods;

    private constructor(apiKeyRepository:IApiKeyRepository){
        this.apiKeyRepository = apiKeyRepository;
        this.apiKey = {
                  create: async(bodyReq:Omit<ApiKey, "id" | "updatedAt" | "createdAt">)=>{
                    try{
                    await this.apiKeyRepository.createApiKey(bodyReq)
                    return
                    }catch(error){
                      throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                    }
                    
                  },
                  selectUniqueForId: async(bodyReq:Pick<ApiKey, "id">)=>{
                    try{
                    const uniqueForId = await this.apiKeyRepository.getUnique(bodyReq)
                    if(!uniqueForId){
                      throw new Error('The request data is missing')
                    }
                    return uniqueForId
                    }catch(error){
                       throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                    }
                    
                  },
                  update: async(bodyReq:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">)=>{
                    try{
                    await this.apiKeyRepository.updateApiKey(bodyReq)
                    return
                    }catch(error){
                     throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                    }
                    
                  },
                  delete: async(bodyReq:Pick<ApiKey, "id">)=>{
                    try{
                    await this.apiKeyRepository.destroyApiKey(bodyReq)
                    return
                    }catch(error){
                     throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                    }
                    
                  }
        }
    }

    static getInstance(){
        if(!ApiKeyService.instance){
                    ApiKeyService.instance = new ApiKeyService(new ApiKeyRepository(prisma))
                }

                return ApiKeyService.instance
    }
}