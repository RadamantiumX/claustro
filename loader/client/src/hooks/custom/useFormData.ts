import { useState, useMemo, type SetStateAction, type Dispatch } from "react"
import type { DataValues } from "../../types/hooks"


export interface InvertedValues {
    
    id: number;
}
// TODO: adding other types of values on Generic Type
export const useFormData = <T extends DataValues>(values:T) =>{
    const [ formData, setFormData ] = useState<T | DataValues>()
    
     useMemo(()=>{
    // Change the first element of the Object to the last position
    const { id,...rest } = values // Destructuring The Object Param
    const modifyObject = {...rest, id} // Adding on the last position
    setFormData(modifyObject)
   },[])
   
   return { formData, setFormData }
}

