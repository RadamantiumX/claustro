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
    <div className='flex flex-col w-full items-center'>
    <div className='flex w-full flex-col justify-end absolute rounded-sm  p-5'>
       
       <div id="bar" className={`h-1 z-50`}></div>
       <button onClick={actionBtn}>Click</button>
    </div>
    
    </div>
  )
}
