import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { UserColabService } from "../services/userColabService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { publicProcedure } from "../lib/procedure";
import { COOKIE_AGE } from "../const/cookieAge";
import { TRPCError } from "@trpc/server/dist";
// TODO: search some solution with AUTH with LuciaAuth: https://lucia-auth.com/
// See this issue: https://discord-questions.trpc.io/m/1173620897517666384

const authServiceInstance = AuthService.getInstance()
const userColabInstance = UserColabService.getInstance()


export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(async({ input, ctx })=>{
            
            const authLogin = await authServiceInstance.auth.login(input)
            const tokenSign = await userColabInstance.userData.uniqueForUsername({username: input.username})
            
            return authLogin
        
            
            // TODO: fix this route!!!
       /* .then((data)=>{
            ctx.res.cookie('jwt',data.refreshToken, { httpOnly: true, secure: true, maxAge: COOKIE_AGE })
        }).catch((error)=>{
            console.log(`Missmatch error on Login router: ${error}`)
        })*/
      
       
        
        /*authServiceInstance.auth.login(input).then((data)=>{
           // TODO: complete the data to set TOKEN
          return data // Here is the problem
        }).catch((error)=>{
            throw new Error(`Something went wrong: ${error}`) //TODO: Handle the errors
        })*/
       
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    }),
    logout: publicProcedure.input(refreshTokenSchema.pick({ userColabId: true })).mutation(({input, ctx})=>{
        return authServiceInstance.auth.destroySession(input)
        .then(()=>{
            ctx.res.clearCookie('jwt', {httpOnly: true, secure:true})
        }).catch((error)=>{
            throw new Error('Something went wrong!')
        })
    })
})