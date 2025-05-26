import { Request, Response, NextFunction } from 'express'
import AppError  from '../appErrors'

export const errorMiddleware = (error:any, req:Request, res:Response, next:NextFunction) => {
   try{

   }catch{
       throw new AppError('Unspected Error', 500, 'Something went wrong!', false)
   }
}