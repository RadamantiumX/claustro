import React from 'react'

export const ModalButton:React.FC<{
  children:React.ReactNode,
   setHide:React.Dispatch<React.SetStateAction<boolean>>}> 
   = ({children, setHide}):React.ReactNode => {
  return (
    <>
<button 
  onClick={()=>setHide(true)}
  data-dialog-target="sign-in-modal"
  className="btn-rounded-hover" type="button">
  {children}
</button>
    </>
  )
}
