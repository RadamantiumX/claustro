import { useEffect } from "react"
import { useStateContext } from "./useCtxStates"

export const useCloseBar = () => {
   const { setOver } = useStateContext() 
   useEffect(()=>{
        const onClick = () =>{
           setOver(false)
        }
        document.body.addEventListener("click", onClick)
   },[])
   return
}


