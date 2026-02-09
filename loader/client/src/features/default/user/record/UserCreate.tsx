import React, { useState } from 'react'
// import { GenericForm } from '../../../../components/forms/GenericForm'

// TODO make a SWITCH CHECKBOX
export const UserCreate = ():React.ReactNode => {
  const [value, setValue] = useState(false)
  console.log(value)
  return (
    <>
    <form action="">
      <div className="relative inline-block w-11 h-6">
  
  <input
    id="toggle-switch"
    type="checkbox"
    className="peer sr-only appearance-none"
    onChange={()=>!value ? setValue(true): setValue(false)}
  />

  <label
    htmlFor="toggle-switch"
    className="absolute top-0 left-0 w-11 h-6 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
  ></label>

  
  <label
    htmlFor="toggle-switch"
    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md cursor-pointer transition-transform duration-300 peer-checked:translate-x-5"
  ></label>
</div>
    </form>
    </>
  )
}
