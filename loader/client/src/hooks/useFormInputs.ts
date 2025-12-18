import { useState, useEffect } from "react";
import type { FormData } from "./useAddData";
export interface InputArray {
    for: string;
    label: string;
    typeInput: string;
    propInput: string;
    placeholder: string;
    value: string;
}



export const useFormInputs = (inputsArray:InputArray[], formData:FormData) => {
   const [formInputs, setFormInputs] = useState(inputsArray)
  
   useEffect(()=>{
  
    formInputs.map((data, index) =>{
        console.log(data)
        console.log(Object.values(formData)[index])
        Object.assign(data, {value: Object.values(formData)[index]})
     })
     setFormInputs(formInputs)
     console.log(formInputs)
    },
 [])

 return { formInputs }
}