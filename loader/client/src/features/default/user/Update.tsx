import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';
import { useFetchUserData } from '../../../hooks/custom/useFetchUserData';
import { USERNAME_INPUT, EMAIL_INPUT } from '../../../utils/const';
import { PageSubTitle } from '../../../components/headers/PageSubTitle';

import type { UserSettingReq } from '../../../types/hooks';




export const Update = ():React.ReactNode => {
  const { userData, userColabId } = useFetchUserData()
  const userUpdateForms = [
  {
    method: "updateUsername",
    inputs: USERNAME_INPUT
  },
  {
    method: "updateEmail",
    inputs: EMAIL_INPUT
  }
]

  return (
    <>
     <DefaultContent>
      <div className='flex flex-col items-start w-auto p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
        <PageSubTitle title='Profile Data'/>
        {userData && 
          userUpdateForms.map((item, key)=>(
            <div key={key}>
               <UserUpdate userData={userData as UserSettingReq} userColabId={userColabId} method={item.method}inputs={item.inputs}/>
            </div>
           
          ))
        }
         <div className='rounded-md bg-green'>
        <h3>Super Admin</h3>
       </div>
      </div>
      
     </DefaultContent>
    </>
  )
}
