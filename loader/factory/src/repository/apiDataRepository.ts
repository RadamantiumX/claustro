import { type ApiData } from "../declarations/index";
import { PrismaClient } from "@prisma/client";
export class ApiDataRepository{

    constructor(private prismaClient:PrismaClient){}
    async getUnique(payload:Pick<ApiData, "id">){
        const unique = await this.prismaClient.apiData.findUnique({
            where: {id:payload.id},
            select:{
                appName: true,
                appId: true
            }
        })

        return unique
       
    }

    async createApiData(payload: Omit<ApiData, "id"| "createdAt" | "updatedAt">){
        await this.prismaClient.apiData.create({
            data:{
               appName: payload.appName,
               appId: payload.appId,
               dataId: payload.dataId 
            }
        })

        return
    }
    
    async updateApiData(payload:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">){
       await this.prismaClient.apiData.update({
        where:{id:payload.id},
        data:{
             appName: payload.appName,
             appId: payload.appId
        }
       })

       return
    }
    
    async destroyApiData(payload:Pick<ApiData, "id">){
        await this.prismaClient.apiData.delete({ where: { id: payload.id } })
       return
    }
}