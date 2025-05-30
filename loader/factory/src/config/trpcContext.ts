import {  initTRPC, TRPCError } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { JWTverifyAndDecode } from '../helper/jwtFunctions'



// see the documentation
export const createContext = ({ req, res }:trpcExpress.CreateExpressContextOptions) =>{
    // JWT to improve
   const token:any = req.headers.authorization 
   try{
    const decode = JWTverifyAndDecode(token)

   }catch(error){
    console.error(error)
   }
}