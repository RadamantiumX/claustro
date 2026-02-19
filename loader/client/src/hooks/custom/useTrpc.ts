import { useState } from "react";
import { httpBatchLink, createTRPCClient, retryLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../../api/src/routers";
// import { customLink } from "../../utils/customLinks";
import { customFetcher } from "../../utils/customFetcher";

 import { cookieHandler, getToken } from "../../helper/cookieHandler";

 import { trpcRefreshClient } from "../../utils/trpc";
// import { customLink } from "../../utils/customLinks";
// import { isExpiredToken } from "../helper/tokenExpiration";
// import Cookies from "js-cookie";
// import { jwtDecode, type JwtPayload } from "jwt-decode";
// import { refreshClient } from "../utils/trpc";
// TODO: fixing the context, see the docs
/**
 * - Custom Hook -
 * @returns {SignInHandler}
 */

// Provisory solution ⬇️

// TODO: Use this for all requests.....
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const useTrpc = () => {
   //const { setToken } = useStateContext()

    const [trpcQueryClient] = useState(
        () => 
            new QueryClient({
                defaultOptions:{
                    queries: {
                        staleTime: 1,
                        retry:true
                    }
                }
            })
    )
   // TODO: WORKS, but do more for this
    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [  
              retryLink({
                 retry(opts){
                     if(opts.error.data?.code === 'UNAUTHORIZED'){
                         console.log('The user is unauthorized')
                         return false
                  }

                    return opts.attempts <= 2
                 }
              }),
             httpBatchLink({ url: 'http://localhost:3000/trpc' ,
            //   headers(){
            //     let authHeaders: { Authorization?:string } = {}
            //     const token = cookieHandler.getAccessToken()
            //     console.log(token)
            //     if(token){
            //         authHeaders = {
            //             Authorization: `Bearer ${token}`
            //         }
            //     }

            //     return authHeaders
            //   },
              fetch:customFetcher
            //   async (url, options):Promise<Response> =>{
            //      const res = await fetch(url, options)
                
            //      if(res.status === 401){
            //         console.log('UNAUTHORIZED')

            //         const rtoken = cookieHandler.getRefreshToken()

            //         if(!rtoken){
            //             cookieHandler.clearTokens()
            //             console.log('Enter the refresh token clear code: 401')
            //             return res
            //         }
            //         try{
            //             console.log('Etry the Try Catch')
            //             const refreshResponse = await trpcRefreshClient.refreshToken.refresh.mutate({ refreshToken: rtoken })
            //             const newAccessToken = refreshResponse.newAccessToken
            //             const newRefreshToken = refreshResponse.newRefreshToken

            //             console.log(newAccessToken)
            //             console.log(newRefreshToken)

            //             cookieHandler.setAccessToken(newAccessToken)
            //             if(newRefreshToken)cookieHandler.setRefreshToken(newRefreshToken)
                        
            //             options.headers['Authorization'] = `Bearer ${newAccessToken}`    
            //             return res    
            //         }catch(error){
            //             console.log(error)
            //             cookieHandler.clearTokens()
            //             window.location.reload()
            //         }
                     
                    

                    
            //      }

                 
            //      return res
            //   }
              
                
               /* async headers (){
                    const jwtAuthToken = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
    
                
                  return {
                    Authorization: jwtAuthToken || getToken(),
                    credentials: 'include'
                  }
                }*/
    })
   


      

        // customLink, httpBatchLink({ url: 'http://localhost:3000/trpc' ,
        //        headers:{
                    
        //             Authorization: getToken()
        //         },
               /* async headers (){
                    const jwtAuthToken = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
    
                
                  return {
                    Authorization: jwtAuthToken || getToken(),
                    credentials: 'include'
                  }
                }*/
   // })

] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

// TODO: <<REMINDER>> --> If you more support about this, please enter in this URL: https://www.google.com/search?q=trpc+refresh+token+react+example&sca_esv=19111bd9c387aca8&sxsrf=ANbL-n6jp3Sv9UVamGtmeRN7QN4rHBGI_A:1771108566514&ei=1viQaduLH7HU1sQPsqyJkAQ&start=0&sa=N&sstk=Af77f_dcm6TntcM54tnsjCMLs6RioaliXF4CkCsSb0-mxzC_bgJhDJ3butGQwbO5miRSDkPxbMDuC5vmwB0iq5-gAMmlIYqYhcsf9eoQ-DWIthbkDkY_vmUKoKEnL5YhsRSG&ved=2ahUKEwjbztzHhdqSAxUxqpUCHTJWAkI4ChDy0wN6BAgLEAQ&biw=1242&bih=545&dpr=1.1

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmOTNjMDBiLWQ2OGYtNDg3NS04YmYzLTY3NDkyMjM0OTQ5OCIsInVzZXJuYW1lIjoicmFkYW1hbnRpdW0iLCJjdXJyZW50RGF0ZSI6IlNhdCBGZWIgMTQgMjAyNiAyMDowNTozNSBHTVQtMDMwMCAoaG9yYSBlc3TDoW5kYXIgZGUgQXJnZW50aW5hKSIsImlzU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNzcxMTEwMzM1LCJleHAiOjE3NzExMTAzOTV9.Lkr3OKvL8i5CIJNcqmw7PSl7tkWDTIDDKUvBYqVoZG8

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmOTNjMDBiLWQ2OGYtNDg3NS04YmYzLTY3NDkyMjM0OTQ5OCIsInVzZXJuYW1lIjoicmFkYW1hbnRpdW0iLCJjdXJyZW50RGF0ZSI6IlNhdCBGZWIgMTQgMjAyNiAyMDowNTozNSBHTVQtMDMwMCAoaG9yYSBlc3TDoW5kYXIgZGUgQXJnZW50aW5hKSIsImlzU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNzcxMTEwMzM1LCJleHAiOjE3NzExMTAzOTV9.Lkr3OKvL8i5CIJNcqmw7PSl7tkWDTIDDKUvBYqVoZG8

*/