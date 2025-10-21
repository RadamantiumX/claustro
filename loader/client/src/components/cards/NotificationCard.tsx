/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect } from 'react'
import { useProgressBar } from '../../hooks/useProgressBar'

export const NotificationCard = () => {
  const {actionBtn} = useProgressBar(document.getElementById("bar"))
/*const [bar, setBar]:any = useState()

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
setBar(document.getElementById('bar'))


 },[])*/

  return (
    
    <div className='bg-amber-50 w-[20%] absolute rounded-sm z-50 p-5'>
       
       <div id="bar" className={`h-1 z-50`}>Notification card</div>
       <button onClick={actionBtn}>Click</button>
    </div>
    
   
  )
}
