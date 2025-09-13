import { TRPCError } from '@trpc/server'
import { trpc } from './trpcContext'

export const authMiddleware = trpc.middleware(({ctx, next})=>{
  // const rt = ctx.req.cookies
  if(!ctx){
    
    console.log('no user authorized')
    throw new TRPCError({ code: 'UNAUTHORIZED', message:'You are not authorized user' })
  }
  return next({ ctx })
})