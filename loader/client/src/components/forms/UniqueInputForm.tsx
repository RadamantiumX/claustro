import React from 'react'
import { useShowBtn, useStateContext } from '../../hooks/hooks';
import { FormButton } from '../buttons/FormButton';
import type { FormProps } from '../../types';

export const UniqueInputForm:React.FC<Omit<FormProps, 'authInputs' | 'toggle'>> = ({handleSubmit, handleChange, dataInputs, innerTextButton}):React.ReactNode => {
  const { show, handleInputBlock } = useShowBtn()
  const { loading } = useStateContext()
  return (
   <>
   <div className='flex items-center gap-x-4'>
          <form onSubmit={handleSubmit}>
            {dataInputs.map((data, key)=>(
            <div key={key} className={data.readonly ?'hidden':'flex items-center gap-x-4'}>
              <label htmlFor={data.for} className="block text-sm/6 font-medium text-white"><span className='font-bold'>{data.label}</span></label>
            <input
             type={data.typeInput}
             id={data.propInput}
             name={data.propInput}
             value={data.value} 
             onChange={handleChange}
             disabled={show || loading} 
             className={'single-input'}
             readOnly={data.readonly ?? false}
             placeholder=''
             />
             {!show && <FormButton loading={loading}>
                  <div className='flex text-[12px] flex-row justify-center gap-x-2'>
                   {innerTextButton}
                  </div>
             </FormButton> }
            </div>
            ))}
          </form>
          {!show && <button onClick={handleInputBlock} disabled={loading} className={`text-[12px] bg-red-500 rounded-md p-2 ${loading ? "opacity-50":"cursor-pointer"}`}>Cancel</button>}
          {show && <button onClick={handleInputBlock} className='text-[12px] bg-indigo-500 w-auto rounded-md p-2 cursor-pointer' title='Edit'>Edit</button> }
    </div>
   </>
  )
}
