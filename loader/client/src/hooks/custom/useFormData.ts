import { useState, useMemo } from "react"


export const useFormData = (values:any) =>{
    const [ formData, setFormData ] = useState({})
    
     useMemo(()=>{
    // Change the first element of the Object to the last position
    const { id,...rest } = values.data // Destructuring The Object Param
    const modifyObject = {...rest, id} // Adding on the last position
    setFormData(modifyObject)
   },[])
   
   return { formData }
}