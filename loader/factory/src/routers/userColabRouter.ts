import { trpc } from "../config/trpcContext";
import { UserColabService } from "../services/userColabService";
import {  userSchema } from "../schemas/zodSchemas/userColabValidation";
import { TRPCError } from '@trpc/server'

const userColabServiceInstance = UserColabService.getInstance()

const authMiddleware = trpc.middleware(({ctx, next})=>{
  if(!ctx){
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({ ctx })
})

const protectedProcedure = trpc.procedure.use(authMiddleware)

export const userColabRouter = trpc.router({
    list: trpc.procedure.query(({ ctx })=>{
       // console.log(ctx)
        
       return userColabServiceInstance.userData.list()
    }),
    create: trpc.procedure.input(userSchema.omit({ id:true, lastSignIn:true }))
     .mutation(({input})=>{
         return userColabServiceInstance.userData.create(input)
     }),
     delete: trpc.procedure.input(userSchema.pick({ id:true }))
       .mutation(({input})=>{
            return userColabServiceInstance.userData.delete(input)
    }),
    update: trpc.procedure.input(userSchema.omit({ lastSignIn:true }))
     .mutation(({input})=>{
        return userColabServiceInstance.userData.update(input)
     })
})