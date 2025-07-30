import { trpc } from "../config/trpcContext";
import { ApiDataService } from "../services/apiDataService";
import { apiDataSchema } from "../schemas/zodSchemas/apiDataValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const apiDataServiceInstance = ApiDataService.getInstance()

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const ApiDataRouter = trpc.router({
    selectForId: protectedProcedure.input(apiDataSchema.pick({id:true})).mutation(
        ({input})=>{
            return apiDataServiceInstance.apiData.selectUniqueForId(input)
        }
    )
})