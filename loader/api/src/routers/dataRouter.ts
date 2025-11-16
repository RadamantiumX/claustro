import { trpc } from "../lib/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema } from "../schemas/zodSchemas/dataValidation";
import { protectedProcedure } from "../lib/procedure";
import { z } from 'zod';

const dataServiceInstance = DataService.getInstance()

const searchInputs = z.object({
    searchReq: z.string()
})

export const dataRouter = trpc.router({
    list: protectedProcedure.query(
        (/*{ctx}*/)=>{
           return dataServiceInstance.data.list()
    }) ,
    create: protectedProcedure.input(dataSchema.omit({id:true})).mutation(
        ({input})=>{
              try{
                return dataServiceInstance.data.create(input)
              }catch(error){
                throw new Error('Too many entries')
              }
                

        }
    ),
    search: protectedProcedure.input(searchInputs.pick({searchReq:true})).mutation(({input})=>{
        try{
            return dataServiceInstance.data.search(input) // TODO: change to OBJECT on service and repository
        }catch(error){
            throw new Error('Too many requests')
        }
    }),
    selectForId: protectedProcedure.input(dataSchema.pick({id:true})).mutation(
        (({input })=>{

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