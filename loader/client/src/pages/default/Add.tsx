import React from 'react'
import HeroSection from '../../features/default/add/HeroSection'
import FormSection from '../../features/default/add/FormSection'
import { ConfirmationCard } from '../../components/cards/ConfirmationCard'
import { useFormBlocker } from '../../hooks/custom/useFormBlocker'
import { useStateContext } from '../../hooks/custom/useCtxStates'
import { useReload } from '../../hooks/custom/useReload'


export default function Add():React.ReactNode {
  const { blocker } = useFormBlocker()
  const { setInputError } = useStateContext()
  useReload()
  return (
    <>
    {blocker.state === "blocked" ? 
      <ConfirmationCard 
        acceptFn={()=>{
          setInputError([])
          blocker.proceed()
        }} 
        rejectFn={()=>{
          blocker.reset()
        }}
        legend="¿Are you sure?... This form insn't validated. If leave, the information will missed"/>
      :
      <></>}
    <div className={blocker.state === "blocked"? "page-flex pointer-events-none opacity-5":"page-flex"}>
      
      <HeroSection/>
      <FormSection/>
    </div>
    </>
  )
}
