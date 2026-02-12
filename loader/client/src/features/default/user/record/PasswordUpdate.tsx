import React from 'react'
import { GenericForm } from '../../../../components/forms/GenericForm';
import { useMutationHandler, useFormInputs, useDecodeToken } from '../../../../hooks/hooks';
import { PASSWORD_UPDATE } from '../../../../utils/const';

export const PasswordUpdate = ():React.ReactNode => {
  const { userColabId } = useDecodeToken()
  const formValues = {
    password:"",
    newPassword:"",
    confirmNewPassword:"",
    id: userColabId
  }
  const { formData, handleChange, handleSubmit } = useMutationHandler(formValues, {route:"userColab",method:"updatePassword"})
  const { formInputs } = useFormInputs(PASSWORD_UPDATE,formData)
  return (
    <>
    <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Password' toggle={false}/>
    </>
  )
}
