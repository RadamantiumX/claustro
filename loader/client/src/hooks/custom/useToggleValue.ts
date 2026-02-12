import { useState } from "react"

export const useToggleValue = () => {
  const [ value, setValue ] = useState(0)

  const handleClickToggle = () => {
     if(value === 0){
        setValue(1)
     }else{
        setValue(0)
     }
  }

  return { value, handleClickToggle }
}