import React from 'react'
import type { ErrorInputResponse } from '../../types/components'

export const ErrorInputMessage:React.FC<{inputError:ErrorInputResponse[], dataName:string, dataValue:string}> = ({inputError, dataName, dataValue}):React.ReactNode => {
  return (
    <>
      {
        inputError.map((input,key)=>(
                     dataName === input.path[0] && 
                     <p key={key} className='text-red-500 text-[12px]'>{dataValue === '' ? 'This field is required!':input.message}</p>
        ))
      }
    </>
  )
}
