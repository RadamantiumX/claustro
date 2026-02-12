import { TRPCError } from '@trpc/server'
import { trpc } from './trpcContext'

// Regular Protected
export const authMiddleware = trpc.middleware(({ctx, next})=>{
 
  if(!ctx){
    
    console.log('no user authorized')
    throw new TRPCError({ code: 'UNAUTHORIZED', message:'You are not authorized user' })
  }
  return next({ ctx })
})

// Only for SUPER ADMIN CONSTRAINS
export const superAdminMiddleware = trpc.middleware(({ctx, next})=>{
    if(!ctx){
    
    console.log('no user authorized')
    throw new TRPCError({ code: 'UNAUTHORIZED', message:'You are not authorized user' })
     
  }
  console.log(`The token is: ${ctx.token}`)
  return next({ ctx })
})