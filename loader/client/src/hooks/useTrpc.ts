import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../api/src/routers";
import { customLink } from "../utils/customLinks";
import { getToken } from "../helper/cookieHandler";
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
                        staleTime: Infinity,
                        experimental_prefetchInRender: true
                    }
                }
            })
    )
   
    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [customLink, httpBatchLink({ url: 'http://localhost:3000/trpc' ,
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
    })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

