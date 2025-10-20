import type { IApiKeyRepository, ApiKeyMethods, ApiKey } from "../declarations/index";
import { ApiKeyRepository } from "../repository/apiKeyRepository";
import prisma from "../config/prismaClient";
import { EnvFactoryErrors } from "../errors/envFactoryErrors";

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
                      throw new EnvFactoryErrors()
                    }
                    
                  },
                  selectUniqueForId: async(bodyReq:Pick<ApiKey, "id">)=>{
                    try{
                    const uniqueForId = await this.apiKeyRepository.getUnique(bodyReq)
                    return uniqueForId
                    }catch(error){
                      throw new EnvFactoryErrors()
                    }
                    
                  },
                  update: async(bodyReq:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">)=>{
                    try{
                    await this.apiKeyRepository.updateApiKey(bodyReq)
                    return
                    }catch(error){
                     throw new EnvFactoryErrors()
                    }
                    
                  },
                  delete: async(bodyReq:Pick<ApiKey, "id">)=>{
                    try{
                    await this.apiKeyRepository.destroyApiKey(bodyReq)
                    return
                    }catch(error){
                     throw new EnvFactoryErrors()
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