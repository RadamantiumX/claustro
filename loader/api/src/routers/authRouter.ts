import { trpc } from "../lib/trpcContext";
import { AuthService } from "../services/authService";
import { UserColabService } from "../services/userColabService";
import { userSchema } from '../schemas/zodSchemas/userColabValidation';
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { publicProcedure } from "../lib/procedure";
import { COOKIE_AGE } from "../const/cookieAge";
// import { TRPCError } from "@trpc/server/dist";
import { JWTtokenSign } from "../helper/jwtFunctions";
import AppError from "../errors/appErrors";
// TODO: search some solution with AUTH with LuciaAuth: https://lucia-auth.com/
// See this issue: https://discord-questions.trpc.io/m/1173620897517666384

const authServiceInstance = AuthService.getInstance()
const userColabInstance = UserColabService.getInstance()


export const authRouter = trpc.router({
    login: publicProcedure.input(userSchema.omit({id:true, lastSignIn: true, isSuperAdmin: true})).mutation(({ input, ctx })=>{
            return authServiceInstance.auth.login(input)
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