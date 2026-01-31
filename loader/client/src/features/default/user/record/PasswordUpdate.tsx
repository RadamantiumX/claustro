import React from 'react'
import { GenericForm } from '../../../../components/forms/GenericForm';
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks';
import { PASSWORD_UPDATE } from '../../../../utils/const';

export const PasswordUpdate = ():React.ReactNode => {
  const formValues = {
    password:"",
    newPassword:"",
    retypeNewPassword:"",
    id:""
  }
  const { formData, handleChange, handleSubmit } = useMutationHandler(formValues, {route:"userColab",method:"updatePassword"})
  const { formInputs } = useFormInputs(PASSWORD_UPDATE,formData)
  return (
    <>
    <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Change Password'/>
    </>
  )
}
