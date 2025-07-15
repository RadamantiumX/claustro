/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react'

export const NotificationCard = () => {
const [bar, setBar]:any = useState()

 useEffect(()=>{
setBar(document.getElementById('bar'))
 },[])

  return (
    <div className='flex flex-col items-center'>
    <div className='flex flex-col justify-end absolute rounded-sm bg-blue-900 p-5'>
       <h4>This is a notification</h4> 
       <div id="bar" className={`h-1 bg-blue-500`}></div>
       
    </div>
    
    </div>
  )
}
