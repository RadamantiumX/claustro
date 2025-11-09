import { trpc } from "../lib/trpcContext";
import { ApiKeyService } from "../services/apiKeyService";
import { apiKeySchema } from "../schemas/zodSchemas/apiKeyValidation";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server";

const apiKeyServiceInstance = ApiKeyService.getInstance()

export const apiKeyRouter = trpc.router({
    selectForId: protectedProcedure.input(apiKeySchema.pick({id:true})).mutation(
        ({input}) =>{
            try{
               return apiKeyServiceInstance.apiKey.selectUniqueForId(input)
            }catch(error){
                throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
    ),
    create: protectedProcedure.input(apiKeySchema.omit({id:true})).mutation(
        (({input}) =>{
            try{
               return apiKeyServiceInstance.apiKey.create(input)
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
    update: protectedProcedure.input(apiKeySchema.omit({apiDataId:true, dataId: true})).mutation(
        (({input}) =>{
            try{
                 return apiKeyServiceInstance.apiKey.update(input)
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
    delete: protectedProcedure.input(apiKeySchema.pick({id:true})).mutation(
        (({input}) =>{
            try{
              return apiKeyServiceInstance.apiKey.delete(input)
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