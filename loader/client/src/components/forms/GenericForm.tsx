import React from 'react';
import { FormButton } from '../buttons/FormButton';
import { Plus, BookmarkUpdate } from '../../icons/icons';
import { useStateContext } from '../../hooks/hooks';
import type { FormProps } from '../../types/components';
import { ErrorInputMessage } from '../misc/ErrorInputMessage';

import { ToggleInput } from '../misc/ToggleInput';

/**
 * Use this for all the forms, auto-generate fields
 * @param param0 
 * @returns 
 */
// TODO: make a global state confirmation to confirm exit without complete the form: EXAMPLE: with the context
export const GenericForm:React.FC<Omit<FormProps, 'authInputs'>> = ({ handleSubmit, handleChange, dataInputs, innerTextButton, toggle }) => {
  const { loading, inputError } = useStateContext()

  
  
  return (
   <>
      <div className='w-[70%]'>
            <form onSubmit={handleSubmit}>
               <div className='flex flex-col gap-y-4'>
             {dataInputs.map((data, key)=>(
              <div key={key}>
                   <label htmlFor={data.for} className='flex flex-row text-[15px] items-center gap-3'>{data.label}<div className="w-[70%]" >
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type={data.typeInput}
                      id={data.propInput}
                      name={data.propInput}
                      value={data.value}
                      onChange={handleChange}
                      placeholder={data.placeholder}
                      className={inputError.length > 0 && data.value === ''?"input-w-full border-red-500":"input-w-full"}
                      disabled={data.readonly ? data.readonly :loading}
                      readOnly={data.readonly ?? false}
                    /> 
                    {inputError.length > 0 && <ErrorInputMessage inputError={inputError} dataName={data.propInput} dataValue={data.value}/>}
                  </div>
                </div>
             ))}
            {toggle && <ToggleInput handleChange={handleChange}/>}
               
               
        <FormButton loading={loading}>
          <div className='flex flex-row justify-center gap-x-2'>
            {innerTextButton}
            {innerTextButton.includes("Update")?<BookmarkUpdate/>:<Plus/>}
          </div>
          
        </FormButton>
            
               
               </div>
              
              </form>
          </div>
   </>
  )
}
