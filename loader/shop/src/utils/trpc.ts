import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../factory/src/routers/index';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { getToken } from '../helper/cookieHandler';

export const  { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>()

export const refreshClient = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: 'http://localhost:3000/trpc',
         headers:{
                Authorization: getToken()
         },
      }),
      
    ]
})