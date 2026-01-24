import React from 'react'
import { useShowBtn, useStateContext } from '../../hooks/hooks';
import { FormButton } from '../buttons/FormButton';

export const UniqueInputForm = (userData):React.ReactNode => {
  const { show, handleInputBlock } = useShowBtn()
  const { loading } = useStateContext()
  return (
   <>
   <div className='flex items-center gap-x-4'>
          <form action="">
            <div className='flex items-center gap-x-4'>
              <label htmlFor="user" className="block text-sm/6 font-medium text-white"><span className='font-bold'>Username</span></label>
            <input id="user" type="text" value={userData ? userData.username : "Loading..."} disabled={show} className='single-input' />
             {!show && <FormButton loading={loading}>
                  <div className='flex flex-row justify-center gap-x-2'>

                  </div>
             </FormButton> }
            </div>
          </form>
          {!show && <button onClick={handleInputBlock} className='text-[12px] bg-red-500 rounded-md p-2 cursor-pointer'>Cancel</button>}
          {show && <button onClick={handleInputBlock} className='text-[12px] bg-indigo-500 w-auto rounded-md p-2 cursor-pointer' title='Edit'>Edit</button> }
          </div>
   </>
  )
}
