import { trpc } from "../lib/trpcContext";
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { RefreshTokenService } from "../services/refreshTokenService";
import { protectedProcedure } from "../lib/procedure";

const refreshTokenInstance = RefreshTokenService.getInstance()

export const refreshTokenRouter = trpc.router({
    refresh: protectedProcedure.query(({ctx})=>{
        const cookies =  ctx.req.cookies
        const refreshToken:string = cookies.jwt
        ctx.res.clearCookie('jwt', { httpOnly: true, secure: true })
        const owner = refreshTokenInstance.refreshToken.verifyOwner(refreshToken)
    })
})