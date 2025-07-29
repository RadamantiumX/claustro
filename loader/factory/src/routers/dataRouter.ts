import { trpc } from "../config/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema } from "../schemas/zodSchemas/dataValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const dataServiceInstance = DataService.getInstance()

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const dataRouter = trpc.router({
    list: protectedProcedure.query(({ctx})=>{
        return dataServiceInstance.data.list()
    }) ,
    create: ,
    selectForId: ,
    selectForEmail: ,
    update: ,
    delete: ,
})