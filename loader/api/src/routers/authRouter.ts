import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { publicProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";

const authServiceInstance = AuthService.getInstance()


export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({ input })=>{
        return authServiceInstance.auth.login(input)
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    }),
    logout: publicProcedure.input(refreshTokenSchema.pick({ userColabId: true })).mutation(({input, ctx})=>{
        return authServiceInstance.auth.destroySession(input)
    })
})