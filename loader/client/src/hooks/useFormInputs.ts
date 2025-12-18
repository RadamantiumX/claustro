import { useState, useMemo } from "react";
import type { FormDataAddData } from "../types/hooks";
import type { FormDataSignIn } from "../types/hooks";
import type { InputArray } from "../types/hooks";


export const useFormInputs = (inputsArray:InputArray[] | Omit<InputArray, "for"| "label">[], formData:FormDataAddData | FormDataSignIn) => {
   const [formInputs, setFormInputs] = useState(inputsArray)
  
   useMemo(()=>{
  
    formInputs.map((data, index) =>{
        console.log(data)
        console.log(Object.values(formData)[index])
        Object.assign(data, {value: Object.values(formData)[index]})
     })
     setFormInputs(formInputs)
     // console.log(formInputs)
    },
 [inputsArray, formData])

 return { formInputs }
}