/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"
import { useStateContext } from "./useCtxStates"

export const useReload = () => {
   const { inputError } = useStateContext()
    const handleBeforeUnload = (e:any) =>{
      if(inputError.length > 0){
        e.preventDefault()
        e.returnValue = "Invalid Form data"
      }
    }
     useEffect(()=>{
        window.addEventListener("beforeunload",handleBeforeUnload)
        return ()=>{
          window.addEventListener("beforeunload",handleBeforeUnload)
        } 
    },[inputError])

    
}