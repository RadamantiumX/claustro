import { trpc } from "../lib/trpcContext";
import { UserColabService } from "../services/userColabService";
import {  userSchema, newPasswordSchema } from "../schemas/zodSchemas/userColabValidation";
import { protectedProcedure } from "../lib/procedure";
// import { TRPCError } from "@trpc/server";

const userColabServiceInstance = UserColabService.getInstance()


export const userColabRouter = trpc.router({
    list: protectedProcedure.query(({ ctx })=>{
      
       return userColabServiceInstance.userData.list()
      
    }),
    create: protectedProcedure.input(userSchema.omit({ id:true, lastSignIn:true }))
     .mutation(({input})=>{
             return userColabServiceInstance.userData.create(input)

     }),
     delete: protectedProcedure.input(userSchema.pick({ id:true }))
       .mutation(({input})=>{
            return userColabServiceInstance.userData.delete(input)

    }),
    update: protectedProcedure.input(userSchema.omit({ lastSignIn:true }))
     .mutation(({input})=>{
          return userColabServiceInstance.userData.update(input) 
     }),
     updatePassword: protectedProcedure.input(newPasswordSchema.pick({ username:true, password:true, newPassword:true }))
       .mutation(({input})=>{
         return userColabServiceInstance.userData.updatePassword(input)
       })
})