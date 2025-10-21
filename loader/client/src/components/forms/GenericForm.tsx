import React from 'react'
import { FormButton } from '../buttons/FormButton'
import { Plus } from '../../icons/Plus'

const inputs = [
  {
    for: "email-source",
    label: "Email Source",
    type: "email",
    id: "email-source",
    name: "email-source",
    placeholder: "user@mail.com",
  },
  {
    for: "email-password",
    label: "Email Password",
    type: "text",
    id: "email-password",
    name: "email-password",
    placeholder: "Insert Email Password",
  },
  {
    for: "x-username",
    label: "X Username",
    type: "text",
    id: "x-username",
    name: "x-username",
    placeholder: "xusername",
  },
  {
    for: "x-password",
    label: "X Password",
    type: "text",
    id: "x-password",
    name: "x-password",
    placeholder: "Insert X Username Password",
  },
]

export const GenericForm = ():React.ReactNode => {
  const loading = false
  return (
   <>
      <div className='w-[50%]'>
            <form action="">
               <div className='flex flex-col gap-y-4'>
             {inputs.map((item, index)=>(
              <div key={index}>
                   <label htmlFor={item.for} className='flex flex-row items-center gap-3'>{item.label}<div className="w-[70%]" >
                </div>
                </label>
                 <div className="relative w-full">
                    <input
                      type={item.type}
                      id={item.id}
                      name={item.name}
                      placeholder={item.placeholder}
                      className="input-w-full"
                    /> 
                  </div>
                </div>
             ))}
                
               
               
        <FormButton loading={loading}>
          <div className='flex flex-row justify-center gap-x-2'>
            Add new record
            <Plus/>
          </div>
          
        </FormButton>
               
               
               </div>
              
              </form>
          </div>
   </>
  )
}
