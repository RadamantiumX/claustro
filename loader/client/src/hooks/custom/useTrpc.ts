import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../../api/src/routers";
import { customLink } from "../../utils/customLinks";
import { getToken } from "../../helper/cookieHandler";
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
                    },
                    mutations: {
                        
                    }
                }
            })
    )
   // TODO: WORKS, but do more for this
    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [  
             customLink,
             httpBatchLink({ url: 'http://localhost:3000/trpc' ,
               headers:{
                    
                    Authorization: getToken() ?? ''
                },
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
