import React from 'react';

export const DataCard:React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <>
        <div className='flex flex-col max-w-fit items-center p-10 gap-y-5 bg-blue-500 rounded-sm'>
           {children}
        </div>
        </>
    )
}