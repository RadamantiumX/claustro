import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { CustomLink } from '../../components/buttons/CustomLink'

export default function RootErrorBoundary():React.ReactNode {
  const error = useRouteError()  
  if(isRouteErrorResponse(error)){
    return (
        <>
         <div className='flex flex-col items-center mt-[10%] gap-y-2'>
          <h1 className='font-bold text-2xl sm:text-6xl'>
           The Error is: {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
          </div>
        </>
    )
  }else if(error instanceof Error){
    return (
        <>
        <div className='flex flex-col items-center mt-[10%] gap-y-2'>
         <h1 className='font-bold text-2xl sm:text-6xl'>OoPs!</h1>
       
        <pre>Something went wrong!!!</pre>
        <CustomLink inner='Back to safe place' route='https://google.com' fontSize=''/>
        </div>
        </>
    )
  }else{
    return(
        <>
        <div className='flex flex-col items-center mt-[10%] gap-y-2'>
        <h1 className='font-bold text-2xl sm:text-6xl'>Unknown Error</h1>
         <CustomLink inner='Back to safe place' route='https://google.com' fontSize=''/>
        </div>
        </>
    )
  }
  
}
