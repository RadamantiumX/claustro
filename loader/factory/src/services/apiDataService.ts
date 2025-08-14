import { IApiDataRepository, ApiDataMethods, ApiData } from "index"
import { ApiDataRepository } from "../repository/apiDataRepository";
import prisma from "../config/prismaClient";

export class ApiDataService{
    private static instance:ApiDataService
    apiDataRepository:IApiDataRepository;
    apiData:ApiDataMethods;

    private constructor(apiDataRepository:IApiDataRepository){
        this.apiDataRepository = this.apiDataRepository
        this.apiData = {
            create: async(bodyReq:Omit<ApiData, "id"| "createdAt" | "updatedAt">)=>{
                // TODO: Validations here! 🌍
                await this.apiDataRepository.createApiData(bodyReq)
                return
            },
            selectUniqueForId: async(bodyReq:Pick<ApiData, "id">)=>{
                const uniqueForId = await this.apiDataRepository.getUnique(bodyReq)
                return uniqueForId
            },
            update: async(bodyReq:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">)=>{
                // TODO: Validations here! 🌍
                await this.apiDataRepository.updateApiData(bodyReq)
                return
            },
            delete: async(bodyReq:Pick<ApiData, "id">)=>{
                await this.apiDataRepository.destroyApiData(bodyReq)
                return
            },


        }
    }

    static getInstance(){
        if(!ApiDataService.instance){
            ApiDataService.instance = new ApiDataService(new ApiDataRepository(prisma))
        }

        return ApiDataService.instance
    }
}