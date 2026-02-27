import { type ApiKey } from "../types/index";
import { type PrismaClient } from "@prisma/client";
import { timeStampParsed } from "../helper/timeStampParser";

export class ApiKeyRepository{
    constructor(private prismaClient:PrismaClient){}
    async getUnique(payload:Pick<ApiKey, "id">){
        const unique = await this.prismaClient.apiKeys.findUnique({
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
         await this.prismaClient.apiKeys.create({
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
        await this.prismaClient.apiKeys.update({
            where:{ id: payload.id },
            data:{
                apiKey: payload.apiKey,
                apiKeySecret: payload.apiKeySecret,
                bearerToken: payload.bearerToken,
                accessToken: payload.accessToken,
                accessTokenSecret: payload.accessTokenSecret,
                updatedAt: timeStampParsed()
            }
        })
        return
    }
    
    async destroyApiKey(payload: Pick<ApiKey, "id">){
         await this.prismaClient.apiKeys.delete({ where: { id: payload.id } })
       return
    }
}