import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../api/src/routers/index';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { getToken } from '../helper/cookieHandler';
import { createTRPCReact } from '@trpc/react-query';

export const  { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>()
export const trpcUtils = createTRPCReact<AppRouter>()
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