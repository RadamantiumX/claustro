import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { AuthService } from '../services/authService'
import type {  UserColab, CreateContextOptions } from '../declarations/index'
import { JWTtokenSign } from '../helper/jwtFunctions'
import { R_TOKEN_EXP } from '../const/tokenExpiration'
import { TRPCError } from '@trpc/server'


// TODO: put inside this context other functions with other context. EXAMPLE: THE REFRESH TOKEN

// see the documentation
export const createContext = async ({ req, res, }:trpcExpress.CreateExpressContextOptions):Promise<CreateContextOptions> =>{
    // TODO: Adding security on "private procedure" middleware
   const token:any = req.headers.authorization 
   
    const authServiceInstance = AuthService.getInstance() // Access to intance

    const verifiedUser:Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null = await  authServiceInstance.auth.verifyCredentials(token)
    if(!verifiedUser || !token){
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'You are not authorized from the server'
        })
    }

    return { req, res, verifiedUser }
  
}

type Context = Awaited<ReturnType< typeof createContext >>// Temporary solving
export const trpc = initTRPC.context<Context>().create()