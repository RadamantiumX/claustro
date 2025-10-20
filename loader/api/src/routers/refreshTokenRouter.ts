import { trpc } from "../lib/trpcContext";
import { RefreshTokenService } from "../services/refreshTokenService";
import { UserColabService } from "../services/userColabService";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";
import { JWTtokenSign, JWTverifyAndDecode } from "../helper/jwtFunctions";
import { A_TOKEN_EXP, R_TOKEN_EXP } from "../const/tokenExpiration";
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";


// Services Instances
const refreshTokenInstance = RefreshTokenService.getInstance()
const userColabInstance = UserColabService.getInstance()


// Refresh TOKEN route
export const refreshTokenRouter = trpc.router({
    refresh: protectedProcedure.input(refreshTokenSchema.pick({refreshToken: true})).mutation(async({input})=>{
        try{

          if(input.refreshToken === undefined){
            throw new TRPCError({ code:'BAD_REQUEST', message:'The refresh token is missing! first stage' })
          }

        const blackListToken = await refreshTokenInstance.refreshToken.blackList(input.refreshToken)
         if(blackListToken){
             throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The token provided is expired' })
         }

        // Decoding ⬇️
        const { id } = JWTverifyAndDecode(input.refreshToken)

        const owner = await refreshTokenInstance.refreshToken.verifyOwner({userColabId:id, refreshToken: input.refreshToken})
        if(!owner){
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Corrupted credentials!' })
        }
       
        const verify = await userColabInstance.userData.uniqueForId({id:id})
        if(!verify){
            throw new TRPCError({ code: 'UNAUTHORIZED', message: 'The token provied is corrupted' })
        }
        const newAccessToken:string = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: A_TOKEN_EXP })
        const newRefreshToken:string = JWTtokenSign({ id:verify.id, username:verify.username, isSuperAdmin: verify.isSuperAdmin, expiresIn: R_TOKEN_EXP })
        
        // Here the refesh token must be replaced
        await refreshTokenInstance.refreshTokenRepository.updateRefreshToken({userColabId: id, refreshToken: newRefreshToken}) // Update the new REFRESH TOKEN
       
        return {newAccessToken:newAccessToken, newRefreshToken:newRefreshToken}
        }catch(error){
            throw new TRPCError({ code: 'BAD_REQUEST', message: `Somenthing went wrong on refreshToken router: ${error}`, cause:error })
        }
       
    })
})