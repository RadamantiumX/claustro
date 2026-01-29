import React from 'react'

export const CornerRibbon:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode => {
  return (
      <div className='flex flex-col items-center absolute shadow-green-500/50 top-4 right-[-8%] rotate-50 w-30 h-auto bg-green-600'>
          <div className='flex flex-row justify-center'>
            <h3 className='font-bold text-gray-300'>{children}</h3>
          </div>
        </div>
  )
}
