import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { AuthService } from '../services/authService'
import { type UserColab } from '../declarations/index'



// TODO: put inside this context other functions with other context. EXAMPLE: THE REFRESH TOKEN

// see the documentation
export const createContext = async ({ req, res }:trpcExpress.CreateExpressContextOptions) =>{
    // JWT to improve
   const token:any = req.headers.authorization 
   try{
    if(!token){
        return null
    }
    const authServiceInstance = AuthService.getInstance() // Access to intance

    const verifyUser:Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null = await  authServiceInstance.auth.verifyCredentials(token)

    return { user: verifyUser, res:res }
   }catch(error){
    console.error(error)
   }
}
type Context = Awaited<ReturnType< typeof createContext >> | any // Temporary solving
export const trpc = initTRPC.context<Context>().create()