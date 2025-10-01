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
                    Authorization: Cookies.get(import.meta.env.VITE_ACCESS_TOKEN) !== undefined ? `Bearer ${Cookies.get(import.meta.env.VITE_ACCESS_TOKEN)}` : ''
                },
    })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

