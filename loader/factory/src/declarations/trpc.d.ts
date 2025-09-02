import * as trpcExpress from '@trpc/server/adapters/express'
import type { UserColab } from 'factory';

export interface CreateContextOptions {
    req: trpcExpress.CreateExpressContextOptions['req'];
    res: trpcExpress.CreateExpressContextOptions['res'];
    verifiedUser: Pick<UserColab, "username" | "password" | "id" | "isSuperAdmin"> | null;
}