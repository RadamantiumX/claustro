import { IApiKeyRepository, ApiKeyMethods, ApiKey } from "index";
import { ApiKeyRepository } from "../repository/ApiKeyRepository";

export class ApiKeyService{
    private static instance:ApiKeyService;
    apiKeyRepository:IApiKeyRepository;
    apiKey:ApiKeyMethods;

    private constructor(apiKeyRepository:IApiKeyRepository){
        this.apiKeyRepository = this.apiKeyRepository;
        this.apiKey = {
                  create: async(bodyReq:Omit<ApiKey, "id" | "updatedAt" | "createdAt">)=>{
                    await this.apiKeyRepository.createApiKey(bodyReq)
                    return
                  },
                  selectUniqueForId: async(bodyReq:Pick<ApiKey, "id">)=>{
                    const uniqueForId = await this.apiKeyRepository.getUnique(bodyReq)
                    return uniqueForId
                  },
                  update: async(bodyReq:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">)=>{
                    await this.apiKeyRepository.updateApiKey(bodyReq)
                    return
                  },
                  delete: async(bodyReq:Pick<ApiKey, "id">)=>{
                    await this.apiKeyRepository.destroyApiKey(bodyReq)
                    return
                  }
        }
    }

    static getInstance(){
        if(!ApiKeyService.instance){
                    ApiKeyService.instance = new ApiKeyService(new ApiKeyRepository)
                }

                return ApiKeyService.instance
    }
}