import {  initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { AuthService } from '../services/authService'
import {NextFunction} from 'express'



// see the documentation
export const createContext = ({ req, res }:trpcExpress.CreateExpressContextOptions, next:NextFunction) =>{
    // JWT to improve
   const token:any = req.headers.authorization 
   try{
    const authServiceInstance = AuthService.getInstance()
    const verifyUser = authServiceInstance.auth.verifyCredentials(token)
    if(!verifyUser){
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized User'
        })
    }

    return verifyUser
   }catch(error){
    console.error(error)
   }
}