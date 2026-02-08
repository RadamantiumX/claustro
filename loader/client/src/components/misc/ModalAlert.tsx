import React from 'react'

// TODO: this is fixed, now refactor this code
export const ModalAlert:React.FC<{children:React.ReactNode, handleEvent:()=>void , show:boolean }> = ({children, handleEvent , show}):React.ReactNode => {
 
  return (
    <>
<div onClick={handleEvent} id="confirmation" className={!show ? "hidden":`fixed z-10 inset-0 overflow-y-auto`}>
        <div  className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center">
           
            <span  className="sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            
            <div onClick={e=>e.stopPropagation()} className="inline-block align-bottom bg-gray-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                 
                <div className="bg-gray-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    {children}
                </div>               
            </div>
        </div>
    </div>
    </>
  )
}
