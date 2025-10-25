/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormButton } from '../buttons/FormButton';
import { Plus } from '../../icons/Plus';
import { useStateContext } from '../../hooks/useCtxStates';
/*
const inputs = [
  {
    for: "email-source",
    label: "Email Source",
    type: "email",
    id: "email-source",
    name: "emailSource",
    placeholder: "user@mail.com",
  },
  {
    for: "email-password",
    label: "Email Password",
    type: "text",
    id: "email-password",
    name: "emailSourdePsw",
    placeholder: "Insert Email Password",
  },
  {
    for: "x-username",
    label: "X Username",
    type: "text",
    id: "x-username",
    name: "xUser",
    placeholder: "xusername",
  },
  {
    for: "x-password",
    label: "X Password",
    type: "text",
    id: "x-password",
    name: "xPsw",
    placeholder: "Insert X Username Password",
  },
]*/

export const GenericForm = ({ handleSubmit, handleChange, inputs, innerTextButton }):React.ReactNode => {
  const { loading } = useStateContext()
  return (
   <>
      <div className='w-[50%]'>
            <form onSubmit={handleSubmit}>
               <div className='flex flex-col gap-y-4'>
             {inputs.map((item:any, index:any)=>(
              <div key={index}>
                   <label htmlFor={item.for} className='flex flex-row items-center gap-3'>{item.label}<div className="w-[70%]" >
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type={item.type}
                      id={item.id}
                      name={item.name}
                      value={item.value}
                      onChange={handleChange}
                      placeholder={item.placeholder}
                      className="input-w-full"
                      disabled={loading}
                    /> 
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
