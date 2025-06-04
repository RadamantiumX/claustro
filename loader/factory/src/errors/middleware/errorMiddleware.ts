import { Request, Response, NextFunction } from 'express'
import { JWTFactoryErrors } from '../jwtFactoryErrors'


export const jwtErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction):void => {
   try{
    const errorFactory = new JWTFactoryErrors()
    const JWTmessage = errorFactory.create(error)
    res.status(401).json({ errorName: JWTmessage.name, message: JWTmessage.message })
    return
   }catch(error){
       console.error(error)
       return
   }
}

export const typeScriptError = (error:any, req:Request, res:Response, next:NextFunction) => {
  try{
    if (error instanceof TypeError){
        console.log('The error is here: ', error)
    }
   console.log('Ho no', error )
 }catch(error){
   console.error(error)
  }
}

