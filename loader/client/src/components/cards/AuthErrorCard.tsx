import React from 'react'

export const AuthErrorCard:React.FC<{message:string}> = ({message}):React.ReactNode => {
  return (
    <>
     <div className={'flex justify-center relative w-[90%]'}>
     <div className={'card-over-index bg-red-600'}>
       <p className="text-gray-300 text-[12px]">{message}</p>
        
     </div>
    </div>
    </>
  )
}
