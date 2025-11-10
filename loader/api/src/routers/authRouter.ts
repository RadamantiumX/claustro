import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { publicProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";

const authServiceInstance = AuthService.getInstance()


export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({ input })=>{
          try{
             return authServiceInstance.auth.login(input)
          }catch(error){
             throw new TRPCError({
                    code:'UNAUTHORIZED',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
          }
           
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        try{
             return authServiceInstance.auth.register(input)
        }catch(error){
             throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
        }
        
    }),
    logout: publicProcedure.input(refreshTokenSchema.pick({ userColabId: true })).mutation(({input, ctx})=>{
        return authServiceInstance.auth.destroySession(input)
        .then(()=>{
            ctx.res.clearCookie('jwt', {httpOnly: true, secure:true})
        }).catch((error)=>{
             throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
           
        })
    })
})