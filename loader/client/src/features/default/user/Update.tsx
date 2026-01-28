import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';
import { useFetchUserData } from '../../../hooks/custom/useFetchUserData';
import { USERNAME_INPUT, EMAIL_INPUT } from '../../../utils/const';
import { PageSubTitle } from '../../../components/headers/PageSubTitle';

import type { UserSettingReq } from '../../../types/hooks';
import type { InputArray } from '../../../types/hooks';

const userUpdateForms = [
  {
    method: "updateUsername",
    inputs: USERNAME_INPUT
  }
]

export const Update = ():React.ReactNode => {
  const { userData, userColabId } = useFetchUserData()
  console.log(userData?.email ? userData.email : "Not values" )
  return (
    <>
     <DefaultContent>
      <div className='flex flex-col items-start w-auto p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
        <PageSubTitle title='Profile Data'/>
        {userData && 
          userUpdateForms.map((item, key)=>(
            <UserUpdate userData={userData as UserSettingReq} userColabId={userColabId} inputs={item.inputs}/>
          ))
        }
      </div>
       
     </DefaultContent>
    </>
  )
}
