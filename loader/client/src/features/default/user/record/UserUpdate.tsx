import React from 'react'
import { UniqueInputForm } from '../../../../components/forms/UniqueInputForm';
// import { USERNAME_INPUT } from '../../../../utils/const';
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks';

import type { UserSetting } from '../../../../types';


// TODO: Try to reuse this or make some different
export const UserUpdate = ({userData, userColabId, inputs}:UserSetting):React.ReactNode => {
 const { handleChange, handleSubmit, formData } = useMutationHandler({ id:userColabId, username: userData.username  },{route:"userColab", method:"updateUsername"})
 const { formInputs } = useFormInputs(inputs, formData)
  return (
    <>
    
      
        
        <div>

         <UniqueInputForm handleSubmit={handleSubmit} handleChange={handleChange} dataInputs={formInputs} innerTextButton='Change'/>

        </div>
     
   
    
    
    </>
  )
}
