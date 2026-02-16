import { cookieHandler } from "../helper/cookieHandler"
import { trpcRefreshClient } from "./trpc"


// THIS IS A TESTING CUSTOM LINK
// Only for auto REFRESH ACCESS TOKENS
export const customFetcher = async (
    info: RequestInfo | URL,
    options: RequestInit | undefined
) => {
   let response = await fetch(info, options)

   if(response.status === 401){
     const rt = cookieHandler.getRefreshToken()
     if(!rt){
        cookieHandler.clearTokens()

        return response
     }

     try{

        const refreshResponse = await trpcRefreshClient.refreshToken.refresh.mutate({ refreshToken:rt })
        const newAccessToken = refreshResponse.newAccessToken
        const newRefreshToken = refreshResponse.newRefreshToken

        cookieHandler.setAccessToken(newAccessToken)
        if(newRefreshToken) cookieHandler.setRefreshToken(newRefreshToken)
       
        // Retry the original REQUEST with new access token    
        const orginRequestHeaders = new Headers(options?.headers)
        orginRequestHeaders.set('Authorization', `Bearer ${newAccessToken}`) 
        
        response = await fetch(info, {
            ...options,
            headers: orginRequestHeaders
        })
     }catch(error){
        // TOKENS CLEAR --> The logout is handle by CONTEXT PROVIDER
        cookieHandler.clearTokens()
        console.error(error)
        return response
     }
   }
}