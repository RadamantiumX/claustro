import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../factory/src/routers";
import { customLink } from "../utils/customLinks";
import { getToken } from "../helper/cookieHandler";
// TODO: fixing the context, see the docs
/**
 * - Custom Hook -
 * @returns {SignInHandler}
 */

// Provisory solution ⬇️

// TODO: Use this for all requests.....
// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
                    
                    Authorization: getToken()
                },
    })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

