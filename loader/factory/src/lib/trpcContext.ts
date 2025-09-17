import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { AuthService } from '../services/authService'
import type {  UserColab, CreateContextOptions } from '../declarations/index'
import { TRPCError } from '@trpc/server'
import { JWTverifyAndDecode } from '../helper/jwtFunctions'
import AppError from '../errors/appErrors'

// TODO: put inside this context other functions with other context. EXAMPLE: THE REFRESH TOKEN

// see the documentation
export const createContext = async ({ req, res, }:trpcExpress.CreateExpressContextOptions) =>{
   const token:string | undefined = req.headers.authorization 
   let user:string | null = null
 if(token){
    try{
        const { username } = JWTverifyAndDecode(token)
        user = username

    }catch(error){
         throw new TRPCError({message:'Invalid token', code:'UNAUTHORIZED' })
    }
     
    }
 
    
    return { req, res, user }
}

// One of MILLON TESTING 😅
/*export const createContext = ({
    req,
    res
}:trpcExpress.CreateExpressContextOptions) => ({})*/

type Context = Awaited<ReturnType< typeof createContext >>// Temporary solving
export const trpc = initTRPC.context<Context>().create({
    // Testing debug
    errorFormatter({shape, error}){
        console.error('tRPC ERROR here:', error)
        return shape
    }
})