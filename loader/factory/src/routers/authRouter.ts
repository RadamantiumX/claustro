import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';


const authServiceInstance = AuthService.getInstance()

const publicProcedure = trpc.procedure

export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input, ctx })=>{
        
        authServiceInstance.auth.login(input).then((data)=>{
          ctx.res.cookie()
          return data
        }).catch((error)=>{
            
        })
       
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    })
})