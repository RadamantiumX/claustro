import { useState, useMemo} from "react"
// import type { DataValues } from "../../types/hooks"


// TODO: in this hook, must select the VALUES and setter (NO IN THE COMP FILE)
export const useFormData = <T>(values:T) =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ formData, setFormData ] = useState<T | any>({} as T) // TS forced to accept {}
    
useMemo(()=>{
    setFormData(values)
   },[])
   
   return { formData, setFormData }
}

