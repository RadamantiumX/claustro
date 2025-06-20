import { trpc } from "../config/trpcContext";
import { AuthService } from "../services/authService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';


const authServiceInstance = AuthService.getInstance()

const publicProcedure = trpc.procedure

export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true})).mutation(({input})=>{
        return authServiceInstance.auth.login(input)
    }),
    register : publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({input})=>{
        return authServiceInstance.auth.register(input)
    })
})