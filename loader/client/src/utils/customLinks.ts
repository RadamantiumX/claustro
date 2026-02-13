import type{ TRPCLink } from "@trpc/client";
import type { AppRouter } from "../../../api/src/routers";
import { observable } from "@trpc/server/observable";
import Cookies from "js-cookie";
import { isExpiredToken } from "../helper/tokenExpiration";
import { refreshClient } from "./trpc";

 // Intercepts the TRPC server responses
export const customLink:TRPCLink<AppRouter>= () =>{
 
  return ({next, op}) =>{
    
    return observable((observer)=>{
      
      
      console.log('Perf. operation: ', op)
      console.log(op.path)
      
      const unsubscribe = next(op).subscribe({
        next(value){

         
         const token:string | undefined= Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         const refreshToken:any = Cookies.get('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo')


        console.log('getting inside')
        // Here evaluates the access token
          const exec = async ()=>{
            if(token !== undefined){
            if(isExpiredToken(token)){
             // TRPC refresh token router
             const refreshedAccessToken = await refreshClient.refreshToken.refresh.mutate({ refreshToken: refreshToken })
             console.log(refreshedAccessToken) // ⚠️Only for debug ---> Delete in production

             // Success on server request
             // Refresh the access token and rotate the refresh token
             // This modify the value on State Context
              Cookies.set('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7',refreshedAccessToken.newAccessToken,{expires: 1})
              Cookies.set('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo',refreshedAccessToken.newRefreshToken,{expires: 1})
          }
          }
          }
         
          exec().then((data)=>{
            console.log(data) // Here Nothing happen 🤨
             
          }).catch((error)=>{
            
            if(error.data?.httpStatus){
            if(error.data?.httpStatus === 401){
             // console.log('Tokens must be destroyed!')
             // If any error appear, the tokens must be destroy, and the Context State will be null
               Cookies.remove('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
               Cookies.remove('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo')
          }
          }
          })
      

          console.log('we recibed value', value);
          observer.next(value)
        
          
          
        },
        error(err) {
          console.log('we received error', err);
          observer.error(err);
          console.log(err.data?.httpStatus)
          
          if(err.data?.httpStatus){
            if(err.data?.httpStatus === 401){
              // console.log('Tokens must be destroyed!')
             // Here happen the same...
             // If any error appear, the tokens must be destroy, and the Context State will be null
               Cookies.remove('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
               Cookies.remove('CLAUSTRO_REFRESH_TOKEN_3iwV166eYJQSTEVo')
          }
          }
          
        },
        complete() {
          observer.complete();
          
          
        },
      })
      
      return unsubscribe

    
    })
  }
}
