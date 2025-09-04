import type { IApiDataRepository, ApiDataMethods, ApiData } from "../declarations/index"
import { ApiDataRepository } from "../repository/apiDataRepository";
import prisma from "../config/prismaClient";
import { EnvFactoryErrors } from "../errors/envFactoryErrors";
export class ApiDataService{
    private static instance:ApiDataService
    apiDataRepository:IApiDataRepository;
    apiData:ApiDataMethods;

    private constructor(apiDataRepository:IApiDataRepository){
        this.apiDataRepository = this.apiDataRepository
        this.apiData = {
            create: async(bodyReq:Omit<ApiData, "id"| "createdAt" | "updatedAt">)=>{
                // TODO: Validations here! 🌍
                try{
                  await this.apiDataRepository.createApiData(bodyReq)
                  return
                }catch(error){
                throw new EnvFactoryErrors()
                }
                
            },
            selectUniqueForId: async(bodyReq:Pick<ApiData, "id">)=>{
                try{
                    const uniqueForId = await this.apiDataRepository.getUnique(bodyReq)
                return uniqueForId
                }catch(error){
                    throw new EnvFactoryErrors()
                }
                
            },
            update: async(bodyReq:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">)=>{
                // TODO: Validations here! 🌍
                try{
                await this.apiDataRepository.updateApiData(bodyReq)
                return
                }catch(error){
                    throw new EnvFactoryErrors()
                }
                
            },
            delete: async(bodyReq:Pick<ApiData, "id">)=>{
                try{
                     await this.apiDataRepository.destroyApiData(bodyReq)
                return
                }catch(error){
                    throw new EnvFactoryErrors()
                }
               
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