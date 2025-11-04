import React from 'react';
import { FormButton } from '../buttons/FormButton';
import { Plus } from '../../icons/Plus';
import { useStateContext } from '../../hooks/hooks';
import type { FormProps } from '../../types/components';

// TODO: make a global state confirmation to confirm exit without complete the form: EXAMPLE: with the context
export const GenericForm:React.FC<Omit<FormProps, 'authInputs'>> = ({ handleSubmit, handleChange, dataInputs, innerTextButton }) => {
  const { loading, inputError } = useStateContext()

  
  
  return (
   <>
      <div className='w-[50%]'>
            <form onSubmit={handleSubmit}>
               <div className='flex flex-col gap-y-4'>
             {dataInputs.map((item, index)=>(
              <div key={index}>
                   <label htmlFor={item.for} className='flex flex-row items-center gap-3'>{item.label}<div className="w-[70%]" >
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type={item.typeInput}
                      id={item.propInput}
                      name={item.propInput}
                      value={item.value}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      className={"input-w-full"}
                      disabled={loading}
                     
                    /> 
                    {inputError.length > 0 && <p className='text-red-500 text-[12px]'>Something is wrong!</p>}
                  </div>
                </div>
             ))}
                
               
               
        <FormButton loading={loading}>
          <div className='flex flex-row justify-center gap-x-2'>
            {innerTextButton}
            <Plus/>
          </div>
          
        </FormButton>
            
               
               </div>
              
              </form>
          </div>
   </>
  )
}
