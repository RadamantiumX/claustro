import { useState, useMemo} from "react"
// import type { DataValues } from "../../types/hooks"



// TODO: adding other types of values on Generic Type
export const useFormData = <T>(values:T) =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ formData, setFormData ] = useState<T | any>({} as T) // TS forced to accept {}
    
useMemo(()=>{
    setFormData(values)
   },[])
   
   return { formData, setFormData }
}

