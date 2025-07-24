import { prisma } from "../config/prismaClient";
import { Datum } from "factory";
import { timeStampParsed } from "../helper/timeStampParser";

export class DataRepository{
    async getUnique({id}:Pick<Datum, "id">){
       const unique = prisma.data.findUnique({
        where:{ id: id },
        select:{
            id: true,
            emailSource:true,
            xUser: true,
            apiData: {
                select: {
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
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

    async getForEmailSource({emailSource}:Pick<Datum, "emailSource">){
       const unique = prisma.data.findUnique({
        where:{ emailSource: emailSource },
        select:{
            id: true,
            emailSource:true,
            xUser: true,
            apiData: {
                select: {
                    appName: true,
                    appId: true
                }
            },
            apiKeys: {
                select: {
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

    async allData(){
        const allDataRecords = await prisma.data.findMany({
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
       await prisma.data.create({
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
    
    async updateData(payload:Omit<Datum, "createdAt" | "updatedAt">){
      await prisma.data.update({
      where: {
        id: payload.id
      },
      data: {
        emailSource: payload.emailSource,
        emailSourcePsw: payload.emailSourcePsw,
        xUser: payload.xUser,
        xPsw: payload.xPsw,
        userColabId: payload.userColabId,
        updatedAt: timeStampParsed()
      }
    })

    return
    }
    
    async destroyData(payload: Pick<Datum, 'id'>){
       await prisma.data.delete({ where: { id: payload.id } })
       return
    }
}