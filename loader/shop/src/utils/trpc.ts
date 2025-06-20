import { createTRPCContext } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../factory/src/routers/index';



export const  { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>()