import { ApiData } from "def";
import { prisma } from "../config/prismaClient";

export class ApiDataRepository{
    async getUnique({id}:Pick<ApiData, "id">){
        const unique = await prisma.apiData.findUnique({
            where: {id:id},
            select:{
                appName: true,
                appId: true
            }
        })

        return unique
       
    }

    async createApiData(payload: Omit<ApiData, "id"| "createdAt" | "updatedAt">){
        await prisma.apiData.create({
            data:{
               appName: payload.appName,
               appId: payload.appId,
               dataId: payload.dataId 
            }
        })

        return
    }
    
    async updateApiData(payload:Omit<ApiData, "createdAt" | "updatedAt" | "dataId">){
       await prisma.apiData.update({
        where:{id:payload.id},
        data:{
             appName: payload.appName,
             appId: payload.appId
        }
       })

       return
    }
    
    async destroyApiData(payload:Pick<ApiData, "id">){
        await prisma.apiData.delete({ where: { id: payload.id } })
       return
    }
}