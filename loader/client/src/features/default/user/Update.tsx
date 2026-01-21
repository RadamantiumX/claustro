import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';
import { useFetchUserData } from '../../../hooks/custom/useFetchUserData';
import type { UserSettingReq } from '../../../types/hooks';

export const Update = ():React.ReactNode => {
  const { userData } = useFetchUserData()
  return (
    <>
     <DefaultContent>
        <UserUpdate userData={userData as UserSettingReq}/>
     </DefaultContent>
    </>
  )
}
