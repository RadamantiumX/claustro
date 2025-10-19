import { NextFunction, Request, Response } from 'express';
import { RefreshTokenService } from '../services/refreshTokenService';


const refreshTokenInstance = RefreshTokenService.getInstance()

export const blackListJWT = async (req:Request, res:Response, next:NextFunction)=>{
    const cookies = req.cookies
    try{
        if(cookies !== undefined){
            const rt = cookies.jwt
            const onTime = refreshTokenInstance.refreshToken.blackList(rt)
            if(!onTime){
                return
            }
            res.status(401).json({ logMessage: 'UNAUTHORIZED' })
            return
        }
        
        next()
    }catch(error){
        console.error(error)
    }
}