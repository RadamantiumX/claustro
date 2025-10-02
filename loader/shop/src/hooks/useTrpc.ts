import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../factory/src/routers";
import Cookies from "js-cookie";
import { customLink } from "../utils/customLinks";
// TODO: fixing the context, see the docs
/**
 * - Custom Hook -
 * @returns {SignInHandler}
 */

// Provisory solution ⬇️
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let token:any;
export const setToken = () => {
    if(token !== undefined){
        token = Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
        console.log(token)
        return token
    }
    return ''
}

export const useTrpc = () => {

    const [trpcQueryClient] = useState(
        () => 
            new QueryClient({
                defaultOptions:{
                    queries: {
                        staleTime: Infinity,
                     
                    }
                }
            })
    )
   
    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [customLink, httpBatchLink({ url: 'http://localhost:3000/trpc' ,
                headers:{
                    
                    Authorization: setToken()
                },
    })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

