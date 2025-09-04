import type { IRefreshTokenRepository } from "../declarations/index";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient"; 

export class RefreshTokenService{
    private static instance:RefreshTokenService
    refreshTokenRepository:IRefreshTokenRepository;
    private constructor(refreshTokenRepository:IRefreshTokenRepository){
        
    }
    static getInstance(){
            if(!RefreshTokenService.instance){
               RefreshTokenService.instance = new RefreshTokenService(new RefreshTokenRepository(prisma))
               console.log('Service userColab ONLINE')
               
           }
           return RefreshTokenService.instance
    }
}