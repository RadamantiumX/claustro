import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';
// TODO: search some solution with AUTH with LuciaAuth: https://lucia-auth.com/

const authServiceInstance = AuthService.getInstance()

const publicProcedure = trpc.procedure

export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({ input })=>{
        
        authServiceInstance.auth.login(input).then((data)=>{
        
          return data
        }).catch((error)=>{
            
        })
       
    }),
    cookies: publicProcedure.mutation(async({ctx})=>{
        ctx.res.cookies()
    }) ,
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    })
})