// TODO: Send to CLIENT the ACCESS TOKEN refreshed
// For the moment, it's not necessary the DB
import { PrismaClient } from "@prisma/client";
import type { AuthRefreshToken, PayloadRefreshToken } from "../declarations/index";
export class RefreshTokenRepository {
    constructor(private prismaClient:PrismaClient){}
    
    async createRefeshToken(payload:PayloadRefreshToken){
        await this.prismaClient.authRefreshToken.create({
            data:{
                refreshToken: payload.refreshToken,
                userColabId: payload.userColabId
            }
        })
        return
    }
    async checkSession(payload:PayloadRefreshToken){
       const getUnique = await this.prismaClient.authRefreshToken.findUnique({ where: {refreshToken: payload.refreshToken} })
    }
}