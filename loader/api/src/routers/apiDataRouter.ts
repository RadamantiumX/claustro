import { trpc } from "../lib/trpcContext";
import { ApiDataService } from "../services/apiDataService";
import { apiDataSchema } from "../schemas/zodSchemas/apiDataValidation";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server/dist";
const apiDataServiceInstance = ApiDataService.getInstance()



export const apiDataRouter = trpc.router({
    selectForId: protectedProcedure.input(apiDataSchema.pick({id:true})).mutation(
        ({input}) =>{
            try{
               return apiDataServiceInstance.apiData.selectUniqueForId(input)
            }catch(error){
                throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
    ),
    create: protectedProcedure.input(apiDataSchema.omit({id:true})).mutation(
        (({input}) =>{
            try{
               return apiDataServiceInstance.apiData.create(input)
            }catch(error){
               throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
        )
    ),
    update: protectedProcedure.input(apiDataSchema.omit({dataId:true})).mutation(
        (({input}) =>{
            try{
                return apiDataServiceInstance.apiData.update(input)
            }catch(error){
                throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
        )
    ),
    delete: protectedProcedure.input(apiDataSchema.pick({id:true})).mutation(
        (({input}) =>{
            try{
                   return apiDataServiceInstance.apiData.delete(input)
            }catch(error){
               throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }

        )
    )
})