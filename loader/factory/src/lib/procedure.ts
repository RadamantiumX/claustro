import { trpc } from "./trpcContext";
import { authMiddleware } from "./trpcMiddlware";

export const publicProcedure = trpc.procedure
export const protectedProcedure = trpc.procedure.use(authMiddleware)