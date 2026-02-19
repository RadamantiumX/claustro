import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import { TRPCError } from '@trpc/server'
import { JWTverifyAndDecode } from '../helper/jwtFunctions'


// TODO: put inside this context other functions with other context. EXAMPLE: THE REFRESH TOKEN
// TODO: See this https://github.com/trpc/trpc/discussions/4226 ⚠️
// TODO: The last thing, you must test and change this context
// see the documentation
export const createContext = ({  res, req }:trpcExpress.CreateExpressContextOptions) =>{
   const authHeader:string | undefined = req.headers.authorization
   let user:string | null = null
   let supAdmin:boolean | null = null
   
 if(authHeader && authHeader.startsWith('Bearer ')){
    const token = authHeader.substring(7);
    try{
        console.log(`Here is the token: ${token}`)
        const { username, isSuperAdmin } = JWTverifyAndDecode(token)
        user = username
        supAdmin = isSuperAdmin

        // return { req, res, user, supAdmin, token }
    }catch(error){
         console.log('Sorry no TOKEN')
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
export const trpc = initTRPC.context<Context>().create(
    /*{
    // Testing debug
   errorFormatter({shape, error}){
        console.error('tRPC ERROR here:', error)
        throw new TRPCError({code:'UNAUTHORIZED', message:"Some error with the credentials provided"})
        return shape
    }
}
    */
   )