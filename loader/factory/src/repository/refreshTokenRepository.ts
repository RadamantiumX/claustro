// TODO: Send to CLIENT the ACCESS TOKEN refreshed
// For the moment, it's not necessary the DB
import { PrismaClient, UserColab } from "@prisma/client";
import type { AuthRefreshToken, PayloadRefreshToken } from "../declarations/index";

export class RefreshTokenRepository {
    constructor(private prismaClient:PrismaClient){}
    
    async createRefeshToken(payload:PayloadRefreshToken):Promise<void>{
        await this.prismaClient.authRefreshToken.create({
            data:{
                refreshToken: payload.refreshToken,
                userColabId: payload.userColabId
            }
        })
        return
    }
    async checkSession(payload:Pick<AuthRefreshToken, 'refreshToken'>):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>{
       const getUnique = await this.prismaClient.authRefreshToken.findUnique({ where: {refreshToken: payload.refreshToken}, select:{ refreshToken:true, userColabId:true } })
       if(getUnique){
        return getUnique
       }
       return null
    }
    async uniqueOwner(payload:Pick<AuthRefreshToken, 'userColabId' | 'refreshToken'>):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>{
         const userColabOwner = await this.prismaClient.authRefreshToken.findUnique({ where: {userColabId:payload.userColabId, refreshToken:payload.refreshToken}, select:{ refreshToken:true, userColabId:true } })
         if(userColabOwner){
            return userColabOwner
         }
         return null
    }
    async updateRefreshToken(payload:Pick<AuthRefreshToken, 'userColabId' | 'refreshToken'>):Promise<void>{
        await this.prismaClient.authRefreshToken.update({
            where:{ userColabId: payload.userColabId },
            data:{
                refreshToken: payload.refreshToken
            }
        })
        return
    }

    async deleteRefreshToken(payload:Pick<AuthRefreshToken, 'userColabId'>):Promise<void>{
        await this.prismaClient.authRefreshToken.delete({ where:{ userColabId: payload.userColabId } })
        return
    }
}