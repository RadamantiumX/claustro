import { trpc } from "../config/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema } from "../schemas/zodSchemas/dataValidation";


const authServiceInstance = DataService.getInstance()

const publicProcedure = trpc.procedure

export const dataRouter = trpc.router({
    
})