import React from 'react'

export const ModalButton:React.FC<{
  children:React.ReactNode,
   handleEvent:()=>void}> 
   = ({children, handleEvent}):React.ReactNode => {
  return (
    <>
<button 
  onClick={handleEvent}
  data-dialog-target="sign-in-modal"
  className="btn-rounded-hover" type="button">
  {children}
</button>
    </>
  )
}
