import { trpc } from "../lib/trpcContext";
import { UserColabService } from "../services/userColabService";
import {  userSchema, newPasswordSchema } from "../schemas/index";
import { protectedProcedure } from "../lib/procedure";


const userColabServiceInstance = UserColabService.getInstance()


export const userColabRouter = trpc.router({
    list: protectedProcedure.query(({ ctx })=>{
      
       return userColabServiceInstance.userData.list()
      
    }),
    select: protectedProcedure.input(userSchema.pick({ id:true }))
    .mutation(({input})=>{
       return userColabServiceInstance.userData.select(input)
    }),
    create: protectedProcedure.input(userSchema.omit({ id:true, lastSignIn:true }))
     .mutation(({input})=>{
             return userColabServiceInstance.userData.create(input)

     }),
     delete: protectedProcedure.input(userSchema.pick({ id:true }))
       .mutation(({input})=>{
            return userColabServiceInstance.userData.delete(input)

    }),
    update: protectedProcedure.input(userSchema.pick({ username:true, email:true }))
     .mutation(({input})=>{
          return userColabServiceInstance.userData.update(input) 
     }),
     updatePassword: protectedProcedure.input(newPasswordSchema)
       .mutation(({input})=>{
         return userColabServiceInstance.userData.updatePassword({id:input.id, password:input.password, newPassword:input.newPassword})
       }),
     updateUsername: protectedProcedure.input(userSchema.pick({id:true,username:true}))
        .mutation(({input})=>{
          return userColabServiceInstance.userData.updateUsername(input)
        }),
     updateEmail: protectedProcedure.input(userSchema.pick({id:true, email:true}))
        .mutation(({input})=>{
          return userColabServiceInstance.userData.updateEmail(input)
        })  
})