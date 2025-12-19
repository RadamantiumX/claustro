import React from 'react';
import { FormButton } from '../buttons/FormButton';
import { Plus } from '../../icons/Plus';
import { useStateContext } from '../../hooks/hooks';
import type { FormProps } from '../../types/components';
import { ErrorInputMessage } from '../misc/ErrorInputMessage';


/**
 * Use this for all the forms, auto-generate fields
 * @param param0 
 * @returns 
 */
// TODO: make a global state confirmation to confirm exit without complete the form: EXAMPLE: with the context
export const GenericForm:React.FC<Omit<FormProps, 'authInputs'>> = ({ handleSubmit, handleChange, dataInputs, innerTextButton }) => {
  const { loading, inputError } = useStateContext()

  
  
  return (
   <>
      <div className='w-[50%]'>
            <form onSubmit={handleSubmit}>
               <div className='flex flex-col gap-y-4'>
             {dataInputs.map((data, key)=>(
              <div key={key}>
                   <label htmlFor={data.for} className='flex flex-row items-center gap-3'>{data.label}<div className="w-[70%]" >
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
                      disabled={loading}
                     
                    /> 
                    {inputError.length > 0 && <ErrorInputMessage inputError={inputError} dataName={data.propInput} dataValue={data.value}/>}
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
