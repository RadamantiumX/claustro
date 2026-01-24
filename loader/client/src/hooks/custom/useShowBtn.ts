import { useState } from "react"

export const useShowBtn = () => {
    const [show, setShow] = useState(true)
          const handleInputBlock = () => {
            
             if(show){
              setShow(false)
             }else{
              setShow(true)
             }
          }

   return {show, handleInputBlock}       
}