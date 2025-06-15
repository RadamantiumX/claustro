import { trpc } from "../config/trpcContext";
import { userColabRouter } from "./userColabRouter";
import { authRouter } from "./authRouter";

export const appRouter = trpc.router({
    auth: authRouter,
    userColab: userColabRouter
})

export type AppRouter = typeof appRouter