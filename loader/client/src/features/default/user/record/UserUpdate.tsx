import React from 'react'
import { PageSubTitle } from '../../../../components/headers/PageSubTitle';
import { UniqueInputForm } from '../../../../components/forms/UniqueInputForm';
import { USERNAME_INPUT } from '../../../../utils/const';
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks';

import type { UserSetting } from '../../../../types';


// TODO: finish this 
export const UserUpdate = ({userData, userColabId}:UserSetting):React.ReactNode => {
 const { handleChange, handleSubmit, formData } = useMutationHandler({ id:userColabId, username: userData.username  },{route:"userColab", method:"updateUsername"})
 const { formInputs } = useFormInputs(USERNAME_INPUT, formData)
  return (
    <>
    
    <div className='flex flex-col items-start w-auto p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
      
        <PageSubTitle title='Profile Data'/>
        <div>

         <UniqueInputForm handleSubmit={handleSubmit} handleChange={handleChange} dataInputs={formInputs} innerTextButton='Change'/>

        </div>
     
    </div>
    
    
    </>
  )
}
