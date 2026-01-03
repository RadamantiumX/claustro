import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../api/src/routers/index';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { getToken } from '../helper/cookieHandler';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

// For all use
export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>



export const  { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>()
export const refreshClient = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
         headers:{
                Authorization: getToken(),
                credentials: 'include'
         },
      }),
      
    ]
})