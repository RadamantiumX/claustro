/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ChangeEvent, type FormEvent } from "react";
import type { UnionInput, EndPoint } from "../../types";

import { useStateContext } from "./useCtxStates";
import { useFormBlocker } from "./useFormBlocker";
import { useFormData } from "./useFormData";
import { useEndPointHandler } from "./useEndPointHandler";


// @values from any FORM COMPONENT to use into "useFormData" hook
// @endPoint OBJECT LITERAL --> {route, method} --> Selected to any TRPC APP-ROUTER
// ⛔ ONLY FOR VOIDS ROUTE METHODS
export const useMutationHandler = <T extends UnionInput>(values:T, endPoint:EndPoint) => {
    
    const { setLoading, setNotification, setInputError, inputError, setUser } = useStateContext()
    
    // Customs hooks 🪝
    const { blocker } = useFormBlocker()
    const { formData, setFormData } = useFormData(values as T)
 
    const { inputMutation } = useEndPointHandler(endPoint)


     // Change Event 🛠️
     const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setFormData({...formData, [e.target.name]: e.target.name === 'isSuperAdmin'
          ? e.target.checked
          : e.target.value }) // Convert ONLY SA values (take the "checked value")
      }

     // Submit Event 📨📩
      const handleSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> =>{
         try{
      
        e.preventDefault()
      
      // Form incomplete or invalid ⛔
      if(blocker.state === "blocked"){
        blocker.proceed()
      }
      setLoading(true)
      inputMutation.mutate(formData, {
        onSuccess: (data, variables:any)=>{
          console.log(data)
          setLoading(false)
          setInputError([])
          setNotification(endPoint.method.includes('update')? 'Success: Save Update Data! ☑️':'Success on create new Record')
          if(endPoint.method === 'updateUsername') setUser(variables.username) // Instant USERNAME update
          setTimeout(()=>{
            window.location.reload()
          },1000)
          
        },
        onError: (error)=>{
            try{
            // Parsing ERROR MESSAGES  
            const parsedError = JSON.parse(error.message) // Parsing error (ZOD Validations)
            setLoading(false)  
            setNotification(`Error: Something went wrong!⚠️ ${parsedError[0].message ? parsedError[0].message : ""}`) // Ternary ERROR MESSAGE
            setInputError(parsedError)
            }catch(e){
              // Only if JASON PARSING FAILS
              console.log(e)
              setLoading(false)
              setNotification(`${error.message}`)
              console.log(inputError)
            }
        }
      })
   
    }catch(error){
        console.log(error)
    }
      }
      return { formData, handleChange, handleSubmit }
}