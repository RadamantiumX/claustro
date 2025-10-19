import { CookieOptions } from "express";


export const cookieOptions = (expires:Date):CookieOptions =>{
   const options = {
     expires:expires,
     httpOnly: true
   }

   return options
}