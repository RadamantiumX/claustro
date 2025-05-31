import { HttpCode } from "errors"

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

export class EnvFactoryErrors{
    create(){

    }
}