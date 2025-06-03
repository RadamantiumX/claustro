import { trpc } from "../config/trpcContext";
import { userColabRouter } from "./userColabRouter";

export const appRouter = trpc.router({
    userColab: userColabRouter
})

export type AppRouter = typeof appRouter