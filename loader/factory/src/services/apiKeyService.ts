import { IApiKeyRepository, ApiKeyMethods } from "index";
import { ApiKeyRepository } from "../repository/ApiKeyRepository";

export class ApiKeyService{
    private static intance:ApiKeyService;
    apiKeyRepository:IApiKeyRepository;
    apiKey:ApiKeyMethods;

    private constructor(apiKeyRepository:IApiKeyRepository){
        this.apiKeyRepository = this.apiKeyRepository;
        this.apiKey = {

        }
    }

    static getInstance(){
        if(!ApiKeyService.instance){
                    ApiKeyService.instance = new ApiKeyService(new ApiKeyRepository)
                }
    }
}