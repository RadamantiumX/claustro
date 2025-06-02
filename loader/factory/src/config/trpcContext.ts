import {  initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { AuthService } from '../services/authService'




// see the documentation
export const createContext = ({ req, res }:trpcExpress.CreateExpressContextOptions) =>{
    // JWT to improve
   const token:any = req.headers.authorization 
   try{
    const authServiceInstance = AuthService.getInstance() // Access to intance
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
type Context = Awaited<ReturnType< typeof createContext >> | any // Temporary solving
export const trpc = initTRPC.context<Context>().create()