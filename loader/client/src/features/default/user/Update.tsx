import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';

export const Update = ():React.ReactNode => {
  return (
    <>
     <DefaultContent>
        <UserUpdate/>
     </DefaultContent>
    </>
  )
}
