import type { IApiDataRepository, ApiDataMethods, ApiData } from "../declarations/index"
import { ApiDataRepository } from "../repository/apiDataRepository";
import prisma from "../config/prismaClient";
import { TRPCError } from "@trpc/server";
export class ApiDataService{
    private static instance:ApiDataService
    apiDataRepository:IApiDataRepository;
    apiData:ApiDataMethods;

    private constructor(apiDataRepository:IApiDataRepository){
        this.apiDataRepository = apiDataRepository
        this.apiData = {
            create: async(bodyReq:Omit<ApiData, "id"| "createdAt" | "updatedAt">)=>{
                // TODO: Validations here! 🌍
                try{
                  await this.apiDataRepository.createApiData(bodyReq)
                  return
                }catch(error){
                throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
                }
                
            },
            selectUniqueForId: async(bodyReq:Pick<ApiData, "id">)=>{
                try{
                const uniqueForId = await this.apiDataRepository.getUnique(bodyReq)
                if(!uniqueForId){
                    throw new Error('The request data not exists')
                }
                return uniqueForId
                }catch(error){
                    throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                }
                
            },
            update: async(bodyReq:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">)=>{
                // TODO: Validations here! 🌍
                try{
                await this.apiDataRepository.updateApiData(bodyReq)
                return
                }catch(error){
                   throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
                }
                
            },
            delete: async(bodyReq:Pick<ApiData, "id">)=>{
                try{
                     await this.apiDataRepository.destroyApiData(bodyReq)
                return
                }catch(error){
                     throw new TRPCError({code:'BAD_REQUEST', message:`Something went wrong!`})
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