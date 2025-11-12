import { type HttpCode } from "../declarations/index"
import { Prisma } from "@prisma/client"
import z from 'zod'
import { TRPCError } from "@trpc/server"

class envCustomErrors extends Error{
    public code:HttpCode
    constructor(message:string, code:HttpCode){
      super(message)
      this.name = 'Internal Error'
      this.code = code
      this.message = 'Something is wrong on the server'
    }
}

class PrismaErrors extends envCustomErrors{
    constructor(meta:any, code:HttpCode){
       super(`Prisma Error: The Error appear on target ${meta.target}`, code)
       this.code = code
    }
    
}

class ZodErrors extends envCustomErrors{
    constructor( issues:any,code:HttpCode){
         super(`Zod Error - Validation fail: ${issues.message}`, code)
         this.code = code
    }
}

class TrpcErrors extends envCustomErrors{
    constructor(message:string, code:HttpCode){
       super(`TRPC Error: ${message}`, code)
       this.code = code
    }
}

export class EnvFactoryErrors{
    create(error:any, code:HttpCode){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
             throw new PrismaErrors(error.meta, code)
        }
        if(error instanceof z.ZodError){
            throw new ZodErrors(error.issues, code)
        }
        if(error instanceof TRPCError){
            throw new TrpcErrors(error.message, code)
        }
        throw new Error(error)
    }
}