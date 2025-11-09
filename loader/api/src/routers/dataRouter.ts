import { trpc } from "../lib/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema } from "../schemas/zodSchemas/dataValidation";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server/dist";

const dataServiceInstance = DataService.getInstance()



export const dataRouter = trpc.router({
    list: protectedProcedure.query(
        (/*{ctx}*/)=>{
            try{
             const allDataList = dataServiceInstance.data.list()
            return allDataList
            }catch(error){
                throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
             
        
    }) ,
    create: protectedProcedure.input(dataSchema.omit({id:true})).mutation(
        ({input})=>{
            try{
                return dataServiceInstance.data.create(input)
            }catch(error){
                 throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
    ),
    selectForId: protectedProcedure.input(dataSchema.pick({id:true})).mutation(
        (({input })=>{
            try{
              return dataServiceInstance.data.selectUniqueForId(input)
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
    selectForEmail: protectedProcedure.input(dataSchema.pick({emailSource: true})).mutation(
        (({input})=>{
            try{
              return dataServiceInstance.data.selectUniqueForEmail(input)
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
    update:protectedProcedure.input(dataSchema.omit({userColabId:true})).mutation(
        (({input})=>{
            try{
              return dataServiceInstance.data.update(input)
            }catch(error){
               throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
        )
    ) ,
    delete:protectedProcedure.input(dataSchema.pick({id:true})).mutation(
        (({input})=>{
            try{
              return dataServiceInstance.data.delete(input)
            }catch(error){
                 throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
            }
            
        }
        )
    ) ,
})