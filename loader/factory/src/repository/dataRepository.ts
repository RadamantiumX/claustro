import type { Datum, Overload } from "../declarations/index";
import { timeStampParsed } from "../helper/timeStampParser";
import { PrismaClient } from '@prisma/client';


export class DataRepository{
    constructor(private prismaClient:PrismaClient){}
    async getUnique(payload:Pick<Datum, "id">):Promise<Overload | null>{
       const unique = await this.prismaClient.data.findUnique({
        where:{ id: payload.id },
        select:{
            id: true,
            emailSource:true,
            xUser: true,
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

    return unique
    }

    async getForEmailSource(payload:Pick<Datum, "emailSource">):Promise<Overload | null>{
       const unique = await this.prismaClient.data.findUnique({
        where:{ emailSource: payload.emailSource },
        select:{
            id: true,
            emailSource:true,
            xUser: true,
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

    return unique
    }

    async allData():Promise<Pick<Datum, "id" | "emailSource" | "xUser" | "userColabId" | "createdAt"> [] | null>{
        const allDataRecords = await this.prismaClient.data.findMany({
            select:{
                id: true,
                emailSource: true,
                xUser: true,
                userColabId: true, 
                createdAt: true
            }
        })
        return allDataRecords
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