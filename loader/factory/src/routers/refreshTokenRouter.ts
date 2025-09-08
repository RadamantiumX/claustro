import { trpc } from "../lib/trpcContext";
import { refreshTokenSchema } from "../schemas/zodSchemas/refreshTokenValidation";
import { RefreshTokenService } from "../services/refreshTokenService";
import { protectedProcedure } from "../lib/procedure";

const refreshTokenInstance = RefreshTokenService.getInstance()

export const refreshTokenRouter = trpc.router({
    validate: protectedProcedure.query()
})