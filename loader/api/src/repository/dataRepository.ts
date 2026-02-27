import type { Datum, ApiData, ApiKey } from "../types/index";
import { timeStampParsed } from "../helper/timeStampParser";
import { type PrismaClient } from '@prisma/client';


// TODO: fix returns types on: "getUnique" & "getForEmailSource" => Returns "any" to the client
export class DataRepository{
    constructor(private prismaClient:PrismaClient){}
    async getUnique(payload:Pick<Datum, "id">):Promise<{   
        data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,
        apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,
        apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>{
       const unique = await this.prismaClient.data.findUnique({
        where:{ id: payload.id },
        select:{
            id: true,
            emailSource:true,
            emailSourcePsw:true,
            xUser: true,
            xPsw:true,
            apiData: {
                select: {
                    id:true,
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
                    id: true,
                    apiKey: true,
                    apiKeySecret: true,
                    bearerToken: true,
                    accessToken: true,
                    accessTokenSecret: true
                }
            }
        }
    })
    if(unique){
     return { 
                data: { 
                  id: unique?.id, 
                  emailSource: unique?.emailSource, 
                  emailSourcePsw: unique?.emailSourcePsw, 
                  xUser: unique?.xUser, 
                  xPsw: unique?.xPsw 
                 }, 
                 apiData: unique.apiData,
                 apiKeys: unique.apiKeys 
             }
    }
   return null

    }
   async searchData(payload:{entry:string, page:number, pageSize:number}):Promise<Pick<Datum, 'id' | 'emailSource' | 'xUser'> [] | null>{
      const dataSearched = await this.prismaClient.data.findMany({
        skip:(payload.page - 1) * payload.pageSize,
        take:payload.pageSize,
        where:{
            OR:[
                { emailSource: { startsWith:payload.entry} },
                { xUser:{ startsWith:payload.entry } }
            ]
        },
        select:{
            id:true,
            emailSource:true,
            xUser:true,
            userColabId: true,
            createdAt: true
        }
      })


      return dataSearched
   }
    async getForEmailSource(payload:Pick<Datum, "emailSource">):Promise<{data: Pick<Datum , "id" | "emailSource" | "xUser" | "emailSourcePsw" | "xPsw">,apiData: Pick<ApiData, "id"| "appName" | "appId"> | null,apiKeys: Pick<ApiKey, "id" | "apiKey" | "apiKeySecret" | "bearerToken" | "accessToken" | "accessTokenSecret"> | null} | null>{
       const unique = await this.prismaClient.data.findUnique({
        where:{ emailSource: payload.emailSource },
        select:{
            id: true,
            emailSource:true,
            emailSourcePsw:true,
            xUser: true,
            xPsw:true,
            apiData: {
                select: {
                    id:true,
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
                    id: true,
                    apiKey: true,
                    apiKeySecret: true,
                    bearerToken: true,
                    accessToken: true,
                    accessTokenSecret: true
                }
            }
        }
    })
  if(unique){
     return { 
                data: { 
                  id: unique?.id, 
                  emailSource: unique?.emailSource, 
                  emailSourcePsw: unique?.emailSourcePsw, 
                  xUser: unique?.xUser, 
                  xPsw: unique?.xPsw 
                 }, 
                 apiData: unique?.apiData,
                 apiKeys: unique?.apiKeys 
             }
  }
    return null
}
   
    async allData(payload:{page:number, pageSize:number}):Promise<{data:Pick<Datum, "id" | "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null, count:number | null}>{
        // Only "pageSize" number of records for page
        const allDataRecords = await this.prismaClient.data.findMany({
            skip:(payload.page - 1) * payload.pageSize,
            take:payload.pageSize,
            select:{
                id: true,
                emailSource: true,
                xUser: true,
                userColabId: true, 
                createdAt: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        })
        const count = await this.prismaClient.data.count()
        return {data:allDataRecords, count:count}
    }

    async createData(payload:Omit<Datum, "id" | "createdAt" | "updatedAt">){
       await this.prismaClient.data.create({
        data: {
            emailSource: payload.emailSource,
            emailSourcePsw: payload.emailSourcePsw,
            xUser: payload.xUser,
            xPsw: payload.xPsw,
            userColabId: payload.userColabId
        }
       })
       return
    }
    
    async updateData(payload:Omit<Datum, "createdAt" | "updatedAt" | "userColabId">){
      await this.prismaClient.data.update({
      where: {
        id: payload.id
      },
      data: {
        emailSource: payload.emailSource,
        emailSourcePsw: payload.emailSourcePsw,
        xUser: payload.xUser,
        xPsw: payload.xPsw,
        updatedAt: timeStampParsed()
      }
    })

    return
    }
    
    async destroyData(payload: Pick<Datum, 'id'>){
       await this.prismaClient.data.delete({ where: { id: payload.id } })
       return
    }
}