import { useState, useMemo } from "react";
import type { FormDataAddData } from "../types/hooks";
import type { FormDataSignIn } from "../types/hooks";
import type { InputArray } from "../types/hooks";

/**
 * Inputs fields generation with Array fields CONSTANTS
 * @param inputsArray Array with custom fields (values empty)
 * @param formData All the fields values 
 * @returns Array with custom fields + All the fields values 
 */
export const useFormInputs = (inputsArray:InputArray[] | Omit<InputArray, "for"| "label">[], formData:FormDataAddData | FormDataSignIn) => {
   const [formInputs, setFormInputs] = useState(inputsArray)
  
   useMemo(()=>{
  
    formInputs.map((data, index) =>{
        Object.assign(data, {value: Object.values(formData)[index]}) // Assign values
     })
     setFormInputs(formInputs)
    
    },
 [inputsArray, formData])

 return { formInputs }
}