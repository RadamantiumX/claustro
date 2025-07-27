import { prisma } from "../config/prismaClient";
import { Datum, Overload } from "index";
import { timeStampParsed } from "../helper/timeStampParser";


export class DataRepository{
    async getUnique(payload:Pick<Datum, "id">):Promise<Overload | null>{
       const unique = await prisma.data.findUnique({
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
       const unique = await prisma.data.findUnique({
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