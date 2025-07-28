import { prisma } from "../config/prismaClient";
import { ApiKey } from "index";

export class ApiKeyRepository{
    async getUnique(payload:Pick<ApiKey, "id">){
        const unique = await prisma.apiKeys.findUnique({
            where: {id:payload.id},
            select: {
                id: true,
                apiKey: true,
                apiKeySecret: true,
                bearerToken: true,
                accessToken: true,
                accessTokenSecret: true,

            }
        })
        return unique
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