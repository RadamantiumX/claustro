import { trpc } from "../lib/trpcContext";
import { DataService } from "../services/dataService";
import { dataSchema, metaSchema } from "../schemas/zodSchemas/dataValidation";
import { protectedProcedure } from "../lib/procedure";
import { z } from 'zod';

const dataServiceInstance = DataService.getInstance()

export const dataRouter = trpc.router({
    list: protectedProcedure.input(metaSchema.omit({entry:true})).mutation(
        ({input})=>{
           try{
             return dataServiceInstance.data.list(input)
           }catch(error){
            throw new Error('Too many requests')
           }
        }
    ) ,
    create: protectedProcedure.input(dataSchema.omit({id:true})).mutation(
        ({input})=>{
              try{
                return dataServiceInstance.data.create(input)
              }catch(error){
                throw new Error('Too many entries')
              }
                

        }
    ),
    search: protectedProcedure.input(metaSchema).mutation(({input})=>{
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