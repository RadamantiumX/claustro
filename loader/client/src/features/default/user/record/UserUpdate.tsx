import React, {useState } from 'react'
import { PageSubTitle } from '../../../../components/headers/PageSubTitle';
import type { UserSetting } from '../../../../types';



export const UserUpdate = ({userData}:UserSetting):React.ReactNode => {
  const [show, setShow] = useState(true)
  const handleInputBlock = () => {
    
     if(show){
      setShow(false)
     }else{
      setShow(true)
     }
  }
  return (
    <>
    
    <div className='flex flex-col items-start w-[40%] p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl'>
      
        <PageSubTitle title='Profile Data'/>
        <div>
          <div className='flex items-center gap-x-4'>
          <form action="">
            <div className='flex items-center gap-x-4'>
              <label htmlFor="user" className="block text-sm/6 font-medium text-white"><span className='font-bold'>Email</span></label>
            <input id="user" type="text" value={userData?.email ? userData?.email : ""} disabled={show} className='single-input' />
             {!show && <button className='text-[12px] bg-green-500 rounded-md p-2 cursor-pointer'>Change</button> }
            </div>
          </form>
          {!show && <button onClick={handleInputBlock} className='text-[12px] bg-red-500 rounded-md p-2 cursor-pointer'>Cancel</button>}
          {show && <button onClick={handleInputBlock} className='text-[12px] bg-indigo-500 w-auto rounded-md p-2 cursor-pointer' title='Edit'>Edit</button> }
          </div>
        </div>
     
    </div>
    
    
    </>
  )
}
