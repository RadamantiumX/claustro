import { useState } from "react";
import { httpBatchLink, createTRPCClient } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../factory/src/routers";

export const useTrpc = () => {
    const [trpcQueryClient] = useState(
        () => 
            new QueryClient({
                defaultOptions:{
                    queries: {
                        staleTime: Infinity,
                        refetchOnWindowFocus: false
                    }
                }
            })
    )

    const [ trpcClient ] = useState(()=> createTRPCClient<AppRouter>({ links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

