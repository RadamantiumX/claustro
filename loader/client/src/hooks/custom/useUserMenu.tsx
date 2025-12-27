import { useStateContext } from "./useCtxStates";
import { useState } from "react";

export const useUserMenu = () =>{
    const {show, setShow} = useStateContext()
    const [rotate, setRotate] = useState(false)

    const handleClick = () =>{
        if(!show && !rotate){
            setShow(true)
            setRotate(true)
        }else{
            setShow(false)
            setRotate(false)
        }
        
    }
  return {show, rotate, handleClick}
}