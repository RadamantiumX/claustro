import { useState } from "react";
import { httpBatchLink, httpLink, createTRPCClient, splitLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../../api/src/routers";
// import { customLink } from "../../utils/customLinks";
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
        splitLink({
            condition(op){
                return op.path === 'auth.login'
            },
            true: httpLink({ url: 'http://localhost:3000/trpc'}),
            false:  httpBatchLink({ url: 'http://localhost:3000/trpc' ,
               headers:{
                    
                    Authorization: getToken()
                },
               /* async headers (){
                    const jwtAuthToken = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
    
                
                  return {
                    Authorization: jwtAuthToken || getToken(),
                    credentials: 'include'
                  }
                }*/
    })
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

