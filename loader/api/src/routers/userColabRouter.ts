import { trpc } from "../lib/trpcContext";
import { UserColabService } from "../services/userColabService";
import {  userSchema } from "../schemas/zodSchemas/userColabValidation";
import { protectedProcedure } from "../lib/procedure";
import { TRPCError } from "@trpc/server/dist";

const userColabServiceInstance = UserColabService.getInstance()


export const userColabRouter = trpc.router({
    list: protectedProcedure.query(({ ctx })=>{
      try{
       console.log(ctx)
       return userColabServiceInstance.userData.list()
      }catch(error){
          throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
      }
    }),
    create: protectedProcedure.input(userSchema.omit({ id:true, lastSignIn:true }))
     .mutation(({input})=>{
         try{
             return userColabServiceInstance.userData.create(input)
         }catch(error){
             throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
         }
         
     }),
     delete: protectedProcedure.input(userSchema.pick({ id:true }))
       .mutation(({input})=>{
           try{
            return userColabServiceInstance.userData.delete(input)
           }catch(error){
              throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
           }
            
    }),
    update: protectedProcedure.input(userSchema.omit({ lastSignIn:true }))
     .mutation(({input})=>{
      try{
          return userColabServiceInstance.userData.update(input)
      }catch(error){
          throw new TRPCError({
                    code:'BAD_REQUEST',
                    message:'An unexpected error occurred, please try again later.',
                    cause: error
                })
      }
        
     })
})