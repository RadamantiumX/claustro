import type { IRefreshTokenRepository, RefreshTokenMethods } from "../declarations/index";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient"; 
import { EnvFactoryErrors } from "../errors/envFactoryErrors"
import { JWTverifyAndDecode, JWTBlacklist } from "../helper/jwtFunctions";

export class RefreshTokenService{
    private static instance:RefreshTokenService
    refreshTokenRepository:IRefreshTokenRepository;
    refreshToken:RefreshTokenMethods;
    private constructor(refreshTokenRepository:IRefreshTokenRepository){
        this.refreshTokenRepository = refreshTokenRepository;
        this.refreshToken = {
            verifyOwner:async(refreshToken:string)=>{
                try{
                    const { id } = JWTverifyAndDecode(refreshToken)
                    const tokenOwner = await this.refreshTokenRepository.checkOwner({userColabId:id})
                    return tokenOwner
                }catch(error){
                  throw new EnvFactoryErrors()
                }
            },
            blackList: async(refreshToken:string):Promise<void>=>{
                try{
                    const { expired } = JWTBlacklist(refreshToken)
                    if(expired){
                        const { id } = JWTverifyAndDecode(refreshToken)
                        await this.refreshTokenRepository.deleteRefreshToken({userColabId:id})
                        return
                    }
                    return
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