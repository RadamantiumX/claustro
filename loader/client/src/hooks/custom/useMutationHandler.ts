/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ChangeEvent, type FormEvent } from "react";
import type { UnionInput, EndPoint } from "../../types";

import { useStateContext } from "./useCtxStates";
import { useFormBlocker } from "./useFormBlocker";
import { useFormData } from "./useFormData";
import { useEndPointHandler } from "./useEndPointHandler";


export const useMutationHandler = <T extends UnionInput>(values:T, endPoint:EndPoint) => {
    
    const { setLoading, setNotification, setInputError, inputError } = useStateContext()
    
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
        onSuccess: (data, variables)=>{
          console.log(data)
          console.log(variables)
          setLoading(false)
          setInputError([])
          setNotification('Success: Save Update Data! ☑️')
          setTimeout(()=>{
            window.location.reload()
          },1000)
          
        },
        onError: (error)=>{
            const parsedError = JSON.parse(error.message)
            setInputError(parsedError)
            console.log(inputError)
            setLoading(false)
            setNotification('Error: Something went wrong!⚠️')
            
        }
      })
   
    }catch(error){
        console.log(error)
    }
      }

      return { formData, handleChange, handleSubmit }
    
}