import type { IRefreshTokenRepository } from "../declarations/index";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient"; 
import { EnvFactoryErrors } from "../errors/envFactoryErrors"
import { JWTverifyAndDecode } from "../helper/jwtFunctions";

export class RefreshTokenService{
    private static instance:RefreshTokenService
    refreshTokenRepository:IRefreshTokenRepository;
    refreshToken
    private constructor(refreshTokenRepository:IRefreshTokenRepository){
        this.refreshTokenRepository = refreshTokenRepository;
        this.refreshToken = {
            verifyOwner:async(refreshToken:string)=>{
                try{
                    const { id } = JWTverifyAndDecode(refreshToken)
                    const tokenOwner = await this.refreshTokenRepository.checkOwner({id})
                    return tokenOwner
                }catch(error){
                  throw new EnvFactoryErrors()
                }
            }
        }
    }
    static getInstance(){
            if(!RefreshTokenService.instance){
               RefreshTokenService.instance = new RefreshTokenService(new RefreshTokenRepository(prisma))
               console.log('Service Tokens ONLINE')
               
           }
           return RefreshTokenService.instance
    }
}