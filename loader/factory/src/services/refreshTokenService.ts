import type { IRefreshTokenRepository, RefreshTokenMethods, AuthRefreshToken } from "../declarations/index";
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
            verifyOwner:async(bodyReq:Pick<AuthRefreshToken, 'userColabId'| 'refreshToken'>)=>{
                try{
                    
                    const tokenOwner = await this.refreshTokenRepository.uniqueOwner({userColabId:bodyReq.userColabId, refreshToken: bodyReq.refreshToken})
                    return tokenOwner
                }catch(error){
                  throw new EnvFactoryErrors()
                }
            },
            update:async({userColabId, refreshToken}:Pick<AuthRefreshToken, 'userColabId'| 'refreshToken'>)=>{
               try{
                 await this.refreshTokenRepository.updateRefreshToken({userColabId, refreshToken})
                 return
               }catch(error){
                throw new Error('Error on Update')
               }
            },
            blackList: async(refreshToken:string):Promise<boolean>=>{
                try{
                    const { expired } = JWTBlacklist(refreshToken)
                    if(expired){
                        const { id } = JWTverifyAndDecode(refreshToken)
                        await this.refreshTokenRepository.deleteRefreshToken({userColabId:id})
                        return expired
                    }
                    return expired
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