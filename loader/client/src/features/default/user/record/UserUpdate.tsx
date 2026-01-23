import React from 'react'
// import { GenericForm } from '../../../../components/forms/GenericForm'
import { PageSubTitle } from '../../../../components/headers/PageSubTitle';

import type { UserSetting } from '../../../../types'


export const UserUpdate = ({userData}:UserSetting):React.ReactNode => {
  console.log(userData)
  return (
    <>
    
    <div className='flex flex-col items-start w-[40%] p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
      
        <PageSubTitle title='Profile'/>
        <div>
          <form action="">
            <div className='grid grid-cols-2 place-items-start gap-4'>
              <label htmlFor="user" className="block text-sm/6 font-medium text-white"><span className='align-middle'>Username</span></label>
            <input id="user" type="text" value={userData ? userData.username : "Loading..."} disabled className='flex-none justify-items-start rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 isabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20' />
            </div>
            
          </form>
          
        </div>
     
    </div>
    
    
    </>
  )
}
