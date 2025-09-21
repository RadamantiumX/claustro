import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../factory/src/routers";
import Cookies from "js-cookie";

// TODO: fixing the context, see the docs
/**
 * - Custom Hook -
 * @returns {SignInHandler}
 */

const customFetch = (url:string, options:RequestInit):Promise<Response> =>{
    const accessToken:string | undefined = import.meta.env.VITE_ACCESS_TOKEN
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
   
    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [httpBatchLink({ url: 'http://localhost:3000/trpc' ,
                headers:{
                    Authorization: Cookies.get(import.meta.env.VITE_ACCESS_TOKEN) !== undefined ? `Bearer ${Cookies.get(import.meta.env.VITE_ACCESS_TOKEN)}` : ''
                },
                fetch:customFetch
       

    })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

