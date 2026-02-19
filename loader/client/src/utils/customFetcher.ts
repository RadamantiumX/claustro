import { cookieHandler } from "../helper/cookieHandler"
import { trpcRefreshClient } from "./trpc"



// THIS IS A TESTING CUSTOM LINK
// Only for auto REFRESH ACCESS TOKENS
export const customFetcher = async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
) => {
   if(cookieHandler.getAccessToken()){
   let response = await fetch(input, {
      ...init,
     headers:{
      "Authorization": `Bearer ${cookieHandler.getAccessToken()}`,
      'Content-Type': 'application/json'
     }, 
     
     credentials:'include'
      
   })
   console.log('Enter the first stage custom fetch')
   if(response.status === 401){
     console.log('Verying the Refresh Token') 
     const rt = cookieHandler.getRefreshToken()
     if(!rt){
        console.log('Enter the refresh token clear code: 401')
        cookieHandler.clearTokens()
        return response
     }
   console.log('Second stage on custom fetch')
     try{
       console.log('try-catch stage')
        const refreshResponse = await trpcRefreshClient.refreshToken.refresh.mutate({ refreshToken:rt })
        const newAccessToken = refreshResponse.newAccessToken
        const newRefreshToken = refreshResponse.newRefreshToken

        cookieHandler.setAccessToken(newAccessToken)
        if(newRefreshToken) cookieHandler.setRefreshToken(newRefreshToken)
       
        // Retry the original REQUEST with new access token    
        const originalRequestHeaders = new Headers(init?.headers)
        originalRequestHeaders.set('Authorization', `Bearer ${newAccessToken}`) 
        originalRequestHeaders.set('Content-Type', 'application/json')
       response = await fetch(input, {
            ...init,
            headers: originalRequestHeaders
        })
     }catch(error){
        console.log(error)
        // TOKENS CLEAR --> The logout is handle by CONTEXT PROVIDER
        cookieHandler.clearTokens()
        console.error(error)
        return response
     }
   }



   return response
}
return await fetch(input,init)
}

