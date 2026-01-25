import React from 'react'
import { PageSubTitle } from '../../../../components/headers/PageSubTitle';
import { UniqueInputForm } from '../../../../components/forms/UniqueInputForm';
import { USERNAME_INPUT } from '../../../../utils/const';
import { useMutationHandler, useFormInputs } from '../../../../hooks/hooks';

import type { UserSetting } from '../../../../types';


// TODO: finish this 
export const UserUpdate = ({userData, userColabId}:UserSetting):React.ReactNode => {
 const { handleChange, handleSubmit, formData } = useMutationHandler({id:userColabId,username: userData.username},{route:"userColab", method:"updateUsername"})
  return (
    <>
    
    <div className='flex flex-col items-start w-[40%] p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
      
        <PageSubTitle title='Profile Data'/>
        <div>

         <UniqueInputForm/>

        </div>
     
    </div>
    
    
    </>
  )
}
