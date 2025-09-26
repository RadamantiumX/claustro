import { trpc } from "../lib/trpcContext";
import { RefreshTokenService } from "../services/refreshTokenService";
import { UserColabService } from "../services/userColabService";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";
import { JWTtokenSign } from "../helper/jwtFunctions";
import { A_TOKEN_EXP, R_TOKEN_EXP } from "../const/tokenExpiration";
import { COOKIE_AGE } from "../const/cookieAge";
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";

// Services Instances
const refreshTokenInstance = RefreshTokenService.getInstance()
const userColabInstance = UserColabService.getInstance()


// Refresh TOKEN route
export const refreshTokenRouter = trpc.router({
    refresh: protectedProcedure.input(refreshTokenSchema.pick({userColabId: true})).mutation(async({ctx, input})=>{
        const cookies =  ctx.req.cookies
        const refreshToken:string = cookies.jwt
        ctx.res.clearCookie('jwt', { httpOnly: true, secure: true })
        const owner = await refreshTokenInstance.refreshToken.verifyOwner({userColabId:input.userColabId, refreshToken: refreshToken})
        if(!owner){
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The token provided is invalid' })
        }
        const verify = await userColabInstance.userData.unique({id:owner.userColabId})
        if(!verify){
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The token provied is corrupted' })
        }
        const newAccessToken = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: A_TOKEN_EXP })
        const newRefreshToken = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: R_TOKEN_EXP })

        await refreshTokenInstance.refreshTokenRepository.updateRefreshToken({userColabId: input.userColabId, refreshToken: newRefreshToken}) // Update the new REFRESH TOKEN

        ctx.res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, maxAge: COOKIE_AGE })
        return newAccessToken
    })
})