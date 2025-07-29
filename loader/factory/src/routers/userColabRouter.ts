import { trpc } from "../config/trpcContext";
import { UserColabService } from "../services/userColabService";
import {  userSchema } from "../schemas/zodSchemas/userColabValidation";
import { authMiddleware } from "./middleware/trpcMiddlware";

const userColabServiceInstance = UserColabService.getInstance()



const protectedProcedure = trpc.procedure.use(authMiddleware)

export const userColabRouter = trpc.router({
    list: protectedProcedure.query(({ ctx })=>{
       // console.log(ctx)
        
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
     })
})