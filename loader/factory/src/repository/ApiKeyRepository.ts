import { prisma } from "../config/prismaClient";
import { ApiKey } from "factory";

export class ApiKeyRepository{
    async getUnique({id}:Pick<ApiKey, "id">){
        const unique = await prisma.apiKeys.findUnique({
            where: {id:id},
            select: {
                apiKey: true,
                apiKeySecret: true,
                bearerToken: true,
                accessToken: true,
                accessTokenSecret: true,

            }
        })

    }

    async createApiKey(payload:Omit<ApiKey, "id" | "updatedAt" | "createdAt">){
         await prisma.apiKeys.create({
            data:{
                apiKey: payload.apiKey,
                apiKeySecret: payload.apiKeySecret,
                bearerToken: payload.bearerToken,
                accessToken: payload.accessToken,
                accessTokenSecret: payload.accessTokenSecret,
                apiDataId: payload.apiDataId,
                dataId: payload.dataId
            }
         })
         return
    }
    
    async updateApiKey(payload:Omit<ApiKey, "updatedAt" | "createdAt" | "dataId" | "apiDataId">){
        await prisma.apiKeys.update({
            where:{ id: payload.id },
            data:{
                apiKey: payload.apiKey,
                apiKeySecret: payload.apiKeySecret,
                bearerToken: payload.bearerToken,
                accessToken: payload.accessToken,
                accessTokenSecret: payload.accessTokenSecret
            }
        })
        return
    }
    
    async destroyApiKey(payload: Pick<ApiKey, "id">){
         await prisma.apiKeys.delete({ where: { id: payload.id } })
       return
    }
}