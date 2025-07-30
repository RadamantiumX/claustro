import { trpc } from "../config/trpcContext";
import { userColabRouter } from "./userColabRouter";
import { authRouter } from "./authRouter";
import { apiDataRouter } from "./apiDataRouter";
import { dataRouter } from "./dataRouter";
import { apiKeyRouter } from "./apiKeyRouter";

export const appRouter = trpc.router({
    auth: authRouter,
    userColab: userColabRouter,
    data: dataRouter,
    apiData: apiDataRouter,
    apiKey: apiKeyRouter
})

export type AppRouter = typeof appRouter