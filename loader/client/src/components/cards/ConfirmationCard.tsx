import React from 'react'
import type { CardConfirmProps } from '../../types/components'


export const ConfirmationCard:React.FC<CardConfirmProps> = ({legend, acceptFn, rejectFn}):React.ReactNode => {
  return (
    <>
   <div className={'flex justify-center'}>
     <div className={'card-hide bg-amber-600'}>
       <p className="text-gray-300 text-[10px]">{legend}</p>
        <div className='flex flex-row gap-x-5'>
          <button onClick={acceptFn} className='rounded-sm px-2 bg-green-700 cursor-pointer'>Yes</button> 
          <button onClick={rejectFn} className='rounded-sm px-2 bg-red-700 cursor-pointer'>No</button>
        </div>
     </div>
    </div>
    </>
  )
}
