import { trpc } from "../config/trpcContext";
import { ApiKeyService } from "../services/apiKeyService";
import { apiKeySchema } from "../schemas/zodSchemas/apiKeyValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const apiKeyServiceInstance = ApiKeyService.getInstance()

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const apiKeyRouter = trpc.router({
    selectForId: protectedProcedure.input(apiKeySchema.pick({id:true})).mutation(
        ({input}) =>{
            return apiKeyServiceInstance.apiKey.selectUniqueForId(input)
        }
    ),
    create: protectedProcedure.input(apiKeySchema.omit({id:true})).mutation(
        (({input}) =>{
            return apiKeyServiceInstance.apiKey.create(input)
        }
        )
    ),
    update: protectedProcedure.input(apiKeySchema.omit({apiDataId:true, dataId: true})).mutation(
        (({input}) =>{
            return apiKeyServiceInstance.apiKey.update(input)
        }
        )
    ),
    delete: protectedProcedure.input(apiKeySchema.pick({id:true})).mutation(
        (({input}) =>{
            return apiKeyServiceInstance.apiKey.delete(input)
        }

        )
    )
})