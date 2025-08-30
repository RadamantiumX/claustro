import { TRPCError } from '@trpc/server'
import { trpc } from './trpcContext'

export const authMiddleware = trpc.middleware(({ctx, next})=>{
  if(!ctx){
    
    console.log('no user authorized')
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({ ctx })
})