import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/index';
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { publicProcedure } from "../lib/procedure";


const authServiceInstance = AuthService.getInstance()


export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true, email:true})).mutation(({ input })=>{
        return authServiceInstance.auth.login(input)
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true, email:true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    }),
    logout: publicProcedure.input(refreshTokenSchema.pick({ userColabId: true })).mutation(({input, ctx})=>{
        return authServiceInstance.auth.destroySession(input)
    })
})