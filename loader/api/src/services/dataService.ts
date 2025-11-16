import type { IDataRepository, DataMethods, Datum } from "../declarations/index";
import { DataRepository } from "../repository/dataRepository";
import prisma from "../config/prismaClient";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
///// TODO: adding the methods on definitions ✅

interface Entry{
  payload: string
}
export class DataService{
    private static instance:DataService;
    dataRepository:IDataRepository;
    data: DataMethods;

    private constructor(dataRepository:IDataRepository){
        this.dataRepository = dataRepository
        this.data = {
            list:async()=>{
                try{
                const allData = await this.dataRepository.allData()
                return allData
                }catch(error){
                  throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                }
                
            },
            search:async(bodyReq:Entry)=>{
                try{
                  const resultsOfSearch = await this.dataRepository.searchData(bodyReq)
                  return resultsOfSearch
                }catch(error){
                throw new TRPCError({ code:'BAD_REQUEST', message:`${error}` })
                }
            },
            create:async(bodyReq:Omit<Datum, "id" | "createdAt" | "updatedAt">):Promise<void>=>{
                // TODO: Validations here! 🌍
                try{
                await this.dataRepository.createData(bodyReq)
                return
                }catch(error){
                  if(error instanceof Prisma.PrismaClientKnownRequestError){
                    console.log(error.code) // Last ERROR CODE: P2003
                  }
                  throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                  
                }
                
            },
            selectUniqueForId:async(bodyReq:Pick<Datum, "id">)=>{
                try{
                const uniqueForId = await this.dataRepository.getUnique(bodyReq)
                if(!uniqueForId){
                    throw new Error('The request data is not exists')
                }
                return uniqueForId
                }catch(error){
                 throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                }
                
            },
            selectUniqueForEmail:async(bodyReq:Pick<Datum, "emailSource">)=>{
                try{
                const uniqueForEmail = await this.dataRepository.getForEmailSource(bodyReq)
                if(!uniqueForEmail){
                    throw new Error('The request data is not exists')
                }
                return uniqueForEmail
                }catch(error){
                   throw new TRPCError({code:'BAD_REQUEST', message:`${error}`})
                }
                
            },
            update:async(bodyReq:Omit<Datum, "createdAt" | "updatedAt" | "userColabId">)=>{
                // TODO: Validations here! 🌍
                try{
                await this.dataRepository.updateData(bodyReq)
                return
                }catch(error){
                    throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                }
                
            },
            delete:async(bodyReq:Pick<Datum, 'id'>)=>{
                try{
                await this.dataRepository.destroyData(bodyReq)
                return
                }catch(error){
                    throw new TRPCError({code:'BAD_REQUEST', message:'Something went wrong!'})
                }
                
            }
        }
    }

    static getInstance(){
            if(!DataService.instance){
                       DataService.instance = new DataService(new DataRepository(prisma))
                       console.log('Service userColab ONLINE')
                       
                   }
                   return DataService.instance
    }
}