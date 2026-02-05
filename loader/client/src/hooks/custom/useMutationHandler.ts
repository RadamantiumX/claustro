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
        setFormData({...formData, [e.target.name]: e.target.value})
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
          setNotification('Success: Save Update Data! ☑️')
          if(endPoint.method === 'updateUsername') setUser(variables.username) // Instant USERNAME update
          setTimeout(()=>{
            window.location.reload()
          },1000)
          
        },
        // TODO: try to handle the errors
        onError: (error)=>{
            console.log(error)
            setLoading(false)
            const parsedError = JSON.parse(error.message) // Parsing error
            setNotification(`Error: Something went wrong!⚠️ ${parsedError[0].message ? parsedError[0].message : ""}`) // Ternary ERROR MESSAGE
            console.log(parsedError[0].message)
            setInputError(parsedError)
            console.log(inputError[0])
          
            
        }
      })
   
    }catch(error){
        console.log(error)
    }
      }

      return { formData, handleChange, handleSubmit }
    
}