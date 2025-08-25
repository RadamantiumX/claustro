import { trpc } from "../config/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema } from "../schemas/zodSchemas/dataValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const dataServiceInstance = DataService.getInstance()

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const dataRouter = trpc.router({
    list: protectedProcedure.query(
        (/*{ctx}*/)=>{
        return dataServiceInstance.data.list()
    }) ,
    create: protectedProcedure.input(dataSchema.omit({id:true})).mutation(
        ({input})=>{
            return dataServiceInstance.data.create(input)
        }
    ),
    selectForId: protectedProcedure.input(dataSchema.pick({id:true})).mutation(
        (({input})=>{
            return dataServiceInstance.data.selectUniqueForId(input)
        }
        )
    ),
    selectForEmail: protectedProcedure.input(dataSchema.pick({emailSource: true})).mutation(
        (({input})=>{
            return dataServiceInstance.data.selectUniqueForEmail(input)
        }
        )
    ),
    update:protectedProcedure.input(dataSchema.omit({userColabId:true})).mutation(
        (({input})=>{
            return dataServiceInstance.data.update(input)
        }
        )
    ) ,
    delete:protectedProcedure.input(dataSchema.pick({id:true})).mutation(
        (({input})=>{
            return dataServiceInstance.data.delete(input)
        }
        )
    ) ,
})