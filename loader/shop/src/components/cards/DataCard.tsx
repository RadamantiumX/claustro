import React from 'react';

export const DataCard:React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <>
        <div className='flex flex-col items-center p-10 gap-y-5 bg-gray-700 rounded-sm shadow-2xl'>
           {children}
        </div>
        </>
    )
}