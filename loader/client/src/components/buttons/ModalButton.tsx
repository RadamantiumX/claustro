import React from 'react'

export const ModalButton:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode => {
  return (
    <>
<button 
  data-dialog-target="sign-in-modal"
  className="rounded-md flex flex-row items-center gap-2 cursor-pointer bg-indigo-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
  {children}
</button>
    </>
  )
}
