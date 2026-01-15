import { useEffect } from "react"
import { useStateContext } from "./useCtxStates"

// Void Hook 
//  Only for close Side Bar
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


