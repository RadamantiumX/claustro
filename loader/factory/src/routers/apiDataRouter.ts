import { trpc } from "../config/trpcContext";
import { ApiDataService } from "../services/apiDataService";
import { apiDataSchema } from "../schemas/zodSchemas/apiDataValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const apiDataServiceInstance = ApiDataService.getInstance()

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const apiDataRouter = trpc.router({
    selectForId: protectedProcedure.input(apiDataSchema.pick({id:true})).mutation(
        ({input}) =>{
            return apiDataServiceInstance.apiData.selectUniqueForId(input)
        }
    ),
    create: protectedProcedure.input(apiDataSchema.omit({id:true})).mutation(
        (({input}) =>{
            return apiDataServiceInstance.apiData.create(input)
        }
        )
    ),
    update: protectedProcedure.input(apiDataSchema.omit({dataId:true})).mutation(
        (({input}) =>{
            return apiDataServiceInstance.apiData.update(input)
        }
        )
    ),
    delete: protectedProcedure.input(apiDataSchema.pick({id:true})).mutation(
        (({input}) =>{
            return apiDataServiceInstance.apiData.delete(input)
        }

        )
    )
})