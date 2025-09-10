import { trpc } from "../lib/trpcContext";
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { RefreshTokenService } from "../services/refreshTokenService";
import { UserColabService } from "../services/userColabService";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";
import { JWTtokenSign } from "../helper/jwtFunctions";

const refreshTokenInstance = RefreshTokenService.getInstance()
const userColabInstance = UserColabService.getInstance()

export const refreshTokenRouter = trpc.router({
    refresh: protectedProcedure.query(async({ctx})=>{
        const cookies =  ctx.req.cookies
        const refreshToken:string = cookies.jwt
        ctx.res.clearCookie('jwt', { httpOnly: true, secure: true })
        const owner = await refreshTokenInstance.refreshToken.verifyOwner(refreshToken)
        if(!owner){
            throw new TRPCError({ code: 'UNAUTHORIZED' })
        }
        const verify = await userColabInstance.userData.unique({id:owner.userColabId})
        if(!verify){
            throw new TRPCError({ code: 'UNAUTHORIZED' })
        }
        const newAt = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn:'6s' })
        const newRt = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn:'1h' })
        ctx.res.cookie('jwt', newRt, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 })
        return newAt
    })
})