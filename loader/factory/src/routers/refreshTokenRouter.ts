import { trpc } from "../lib/trpcContext";
import { RefreshTokenService } from "../services/refreshTokenService";
import { UserColabService } from "../services/userColabService";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";
import { JWTtokenSign } from "../helper/jwtFunctions";
import { A_TOKEN_EXP, R_TOKEN_EXP } from "../const/tokenExpiration";
import { COOKIE_AGE } from "../const/cookieAge";

const refreshTokenInstance = RefreshTokenService.getInstance()
const userColabInstance = UserColabService.getInstance()


// Refresh TOKEN route
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
        const newAt = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: A_TOKEN_EXP })
        const newRt = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: R_TOKEN_EXP })
        ctx.res.cookie('jwt', newRt, { httpOnly: true, secure: true, maxAge: COOKIE_AGE })
        return newAt
    })
})