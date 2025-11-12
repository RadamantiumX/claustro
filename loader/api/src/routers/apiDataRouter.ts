import { trpc } from "../lib/trpcContext";
import { ApiDataService } from "../services/apiDataService";
import { apiDataSchema } from "../schemas/zodSchemas/apiDataValidation";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";
const apiDataServiceInstance = ApiDataService.getInstance()



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