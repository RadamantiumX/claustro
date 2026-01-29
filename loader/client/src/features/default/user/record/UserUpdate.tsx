import React from 'react'
import { UniqueInputForm } from '../../../../components/forms/UniqueInputForm';
// import { USERNAME_INPUT } from '../../../../utils/const';
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks';

import type { UserSetting } from '../../../../types';


// TODO: Try to reuse this or make some different
export const UserUpdate = ({userData, userColabId, method, inputs}:UserSetting):React.ReactNode => {
 const { handleChange, handleSubmit, formData } = useMutationHandler(method === "updateUsername" ? { id:userColabId, username: userData.username  }:{id:userColabId, email: userData.email},
    {route:"userColab", method:method})
 const { formInputs } = useFormInputs(inputs, formData)
  return (
    <>
      <UniqueInputForm handleSubmit={handleSubmit} handleChange={handleChange} dataInputs={formInputs} innerTextButton='Change'/>
    </>
  )
}
