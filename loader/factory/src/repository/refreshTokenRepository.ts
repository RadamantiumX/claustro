// TODO: Send to CLIENT the ACCESS TOKEN refreshed
// For the moment, it's not necessary the DB
import { PrismaClient } from "@prisma/client";
import type { AuthRefreshToken } from "../declarations/index";
export class RefreshTokenRepository {
    constructor(private prismaClient:PrismaClient){}
    
    async createRefeshToken(payload:){
        
    }
}