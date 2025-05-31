import { Request, Response, NextFunction } from 'express'
import { JWTFactoryErrors } from '../jwtFactoryErrors'

export const jwtErrorMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
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