import { HttpCode } from "index"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import z from 'zod'
import { TRPCError } from "@trpc/server/dist"

class envCustomErrors extends Error{
    public code:HttpCode
    constructor(message:string){
      super(message)
      this.name = 'Internal Error'
      this.code = 500
      this.message = 'Something is wrong on the server'
    }
}

class PrismaErrors extends envCustomErrors{
    constructor(meta:any, code:HttpCode){
       super(`Prisma Error: The Error appear on target ${meta.target}`)
       this.code = code
    }
    
}

class ZodErrors extends envCustomErrors{
    constructor( issues:any,code:HttpCode){
         super(`Zod Error - Validation fail: ${issues.message}`)
         this.code = code
    }
}

class TrpcErrors extends envCustomErrors{
    constructor(message:string, code:HttpCode){
       super(`TRPC Error: ${message}`)
       this.code = code
    }
}

export class EnvFactoryErrors{
    create(error:any, code:HttpCode){
        if(error instanceof PrismaClientKnownRequestError){
             return new PrismaErrors(error.meta, code)
        }
        if(error instanceof z.ZodError){
            return new ZodErrors(error.issues, code)
        }
        if(error instanceof TRPCError){
            return new TrpcErrors(error.message, code)
        }
        throw new Error(error)
    }
}