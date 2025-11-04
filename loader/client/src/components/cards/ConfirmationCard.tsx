import React from 'react'

export interface CardConfirmProps {
  legend:string;

}

export const ConfirmationCard:React.FC<CardConfirmProps> = ({legend}):React.ReactNode => {
  return (
    <>
   <div className={'flex justify-center'}>
     <div className={'card-hide bg-amber-600'}>
       <p className="text-gray-300 text-[15px]">{legend}</p>
        <div className='flex flex-row gap-x-5'>
          <button  className='rounded-sm px-2 bg-green-700 cursor-pointer'>Yes</button> 
          <button  className='rounded-sm px-2 bg-red-700 cursor-pointer'>No</button>
        </div>
     </div>
    </div>
    </>
  )
}
