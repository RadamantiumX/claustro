import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';
import { useFetchUserData } from '../../../hooks/custom/useFetchUserData';
import type { UserSettingReq } from '../../../types/hooks';


export const Update = ():React.ReactNode => {
  const { userData, userColabId } = useFetchUserData()
  console.log(userData?.email ? userData.email : "Not values" )
  return (
    <>
     <DefaultContent>
       {userData && <UserUpdate userData={userData as UserSettingReq} userColabId={userColabId}/>}
     </DefaultContent>
    </>
  )
}
