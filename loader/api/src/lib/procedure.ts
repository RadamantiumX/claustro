import { trpc } from "./trpcContext";
import { authMiddleware, superAdminMiddleware } from "./trpcMiddlware";

export const publicProcedure = trpc.procedure
export const protectedProcedure = trpc.procedure.use(authMiddleware)
export const superAdminProcedure = trpc.procedure.use(superAdminMiddleware)