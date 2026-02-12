import React from 'react'
import { GenericForm } from '../../../../components/forms/GenericForm'
import { USER_CREATE } from '../../../../utils/const'
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks'

// TODO make a SWITCH CHECKBOX
export const UserCreate = ():React.ReactNode => {
  const formValues = {
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }
   const { formData, handleChange, handleSubmit } = useMutationHandler(formValues, {route:"userColab",method:"create"})
   const { formInputs } = useFormInputs(USER_CREATE, formData)
  return (
    <>
    
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Create User' toggle={true}/>
    
    </>
  )
}
