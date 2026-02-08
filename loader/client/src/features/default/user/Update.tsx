import React from 'react';
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent';
import { UserUpdate } from './record/UserUpdate';
import { CornerRibbon } from '../../../components/misc/CornerRibbon';
import { PageSubTitle } from '../../../components/headers/PageSubTitle';

import { PasswordUpdate } from './record/PasswordUpdate';
import { UserPlus } from '../../../icons/icons';
import { ModalButton } from '../../../components/buttons/ModalButton';
import { ModalAlert } from '../../../components/misc/ModalAlert';

import type { UserSettingReq } from '../../../types/hooks';
import { USERNAME_INPUT, EMAIL_INPUT } from '../../../utils/const';
import { useFetchUserData, useModal } from '../../../hooks/hooks';


export const Update = ():React.ReactNode => {
  const { userData, userColabId, strDate } = useFetchUserData()
  const { show, handleClose, handleOpen } = useModal()
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

      <div className='flex flex-col relative overflow-hidden  items-start w-auto p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>

       {userData?.isSuperAdmin === true && <CornerRibbon>SA</CornerRibbon>}

        <PageSubTitle title='Profile Settings'/>
        {userData && 
          userUpdateForms.map((item, key)=>(
            <div key={key}>
               <UserUpdate userData={userData as UserSettingReq} userColabId={userColabId} method={item.method}inputs={item.inputs}/>
            </div>
           
          ))
        }
        <div className='flex flex-row gap-10'><h6 className='font-bold'>Created At</h6>{userData && <p className='font-thin text-[15px]'>{strDate}</p>}</div>
       {userData?.isSuperAdmin === true && <ModalButton handleEvent={handleOpen}>Add New User<UserPlus/></ModalButton>}

   
       {show && <ModalAlert show={show} handleEvent={handleClose}>
        <div className="">
          New User
        </div>
       </ModalAlert>}

       <PageSubTitle title='Password Change'/>
       <div className='flex flex-col items-center w-full'>
        <PasswordUpdate/>
       </div>
       
      </div>
      
     </DefaultContent>
    </>
  )
}
