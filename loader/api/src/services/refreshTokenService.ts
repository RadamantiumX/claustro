import type { IRefreshTokenRepository, RefreshTokenMethods, AuthRefreshToken } from "../types/index";
import { RefreshTokenRepository } from "../repository/refreshTokenRepository";
import prisma from "../config/prismaClient";
import { JWTverifyAndDecode, JWTBlacklist } from "../helper/jwtFunctions";
import { TRPCError } from "@trpc/server";

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
                    if(!tokenOwner){
                        throw new Error('Wrong credentials provided')
                    }
                    return tokenOwner
                }catch(error){
                  throw new TRPCError({code:'UNAUTHORIZED',message:`${error}`})
                }
            },
            update:async({userColabId, refreshToken}:Pick<AuthRefreshToken, 'userColabId'| 'refreshToken'>)=>{
               try{
                 await this.refreshTokenRepository.updateRefreshToken({userColabId, refreshToken})
                 return
               }catch(error){
                 throw new TRPCError({code:'UNAUTHORIZED',message:`Something went wrong!`})
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
                throw new TRPCError({code:'UNAUTHORIZED',message:`Something went wrong!`})
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