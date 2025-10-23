/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, useEffect } from 'react'



export const NotificationCard = () => {
  
// TODO: make style to transition from the top

  return (
    <div className='flex justify-center'>
    <div className='flex flex-col items-center bg-amber-50 w-[20%] absolute rounded-sm z-[1000] p-5 mt-10'>
       
       
       <p>Notifacation Message! ⚠️</p>
       <div style={{ animation: `load 5s normal forwards` }} className="h-1 bg-amber-500"></div>
       
       
    </div>
    </div>
   
  )
}
