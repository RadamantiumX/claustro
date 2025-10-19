import { trpc } from "../lib/trpcContext";
import { userColabRouter } from "./userColabRouter";
import { authRouter } from "./authRouter";
import { apiDataRouter } from "./apiDataRouter";
import { dataRouter } from "./dataRouter";
import { apiKeyRouter } from "./apiKeyRouter";
import { refreshTokenRouter } from "./refreshTokenRouter";

export const appRouter = trpc.router({
    auth: authRouter,
    userColab: userColabRouter,
    data: dataRouter,
    apiData: apiDataRouter,
    apiKey: apiKeyRouter,
    refreshToken: refreshTokenRouter
})

export type AppRouter = typeof appRouter