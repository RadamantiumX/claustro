/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export const useProgressBar = (element:any) =>{
    const [bar, setBar] = useState<HTMLElement | undefined | any>()

const actionBtn = () =>{
  let width = 1
const id = setInterval(()=>{
   if(width >=100){
    clearInterval(id)
   }else{
    width ++;
    bar.style.width = width + '%'
    bar.style.background = 'yellow'
   }
},20)
}

useEffect(()=>{
setBar(element)
 },[bar])

return {actionBtn}
}
