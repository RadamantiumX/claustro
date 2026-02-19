import { useState } from "react";
import { httpBatchLink, createTRPCClient, retryLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../../../api/src/routers";
import { customFetcher } from "../../utils/customFetcher";


/**
 * - Custom Hook -
 * @returns {SignInHandler}
 */

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
           
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              fetch: customFetcher as any // --> Provisory solution
            
    })
   

] }))

    return {
        trpcQueryClient,
        trpcClient
    }

}

