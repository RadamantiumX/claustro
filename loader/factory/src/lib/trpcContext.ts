import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { AuthService } from '../services/authService'
import { type UserColab } from '../declarations/index'
import { JWTtokenSign } from '../helper/jwtFunctions'
import { R_TOKEN_EXP } from '../const/tokenExpiration'



// TODO: put inside this context other functions with other context. EXAMPLE: THE REFRESH TOKEN

// see the documentation
export const createContext = async ({ req, res, }:trpcExpress.CreateExpressContextOptions) =>{
    // TODO: Adding security on "private procedure" middleware
    // JWT to improve
   /*const token:any = req.headers.authorization 
    if(!token){
        return null
    }
    const authServiceInstance = AuthService.getInstance() // Access to intance

    const verifyUser:Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null = await  authServiceInstance.auth.verifyCredentials(token)

    if(!verifyUser){
        return null
    }
     const refreshToken = JWTtokenSign({
                id: verifyUser.id,
                username: verifyUser.username,
                isSuperAdmin: verifyUser.isSuperAdmin,
                expiresIn: R_TOKEN_EXP
             })*/
    return { req, res }
  
}

type Context = Awaited<ReturnType< typeof createContext >>// Temporary solving
export const trpc = initTRPC.context<Context>().create()