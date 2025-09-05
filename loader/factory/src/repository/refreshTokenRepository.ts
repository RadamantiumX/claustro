// TODO: Send to CLIENT the ACCESS TOKEN refreshed
// For the moment, it's not necessary the DB
import { PrismaClient } from "@prisma/client";
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
       const getUnique = await this.prismaClient.authRefreshToken.findUnique({ where: {refreshToken: payload.refreshToken} })
       if(getUnique){
        return { refreshToken: getUnique?.refreshToken, userColabId: getUnique?.userColabId }
       }
       return null
    }
    async checkOwner(payload:{id:string}):Promise<Pick<AuthRefreshToken, 'refreshToken' | 'userColabId'> | null>{
         const userColabOwner = await this.prismaClient.authRefreshToken.findUnique({ where: {userColabId:payload.id} })
         if(userColabOwner){
            return { refreshToken: userColabOwner.refreshToken, userColabId: userColabOwner.userColabId }
         }
         return null
    }
}