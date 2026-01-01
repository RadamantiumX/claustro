/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ChangeEvent, type FormEvent } from "react";
import { useStateContext } from "./useCtxStates";
import { useTRPC } from "../../utils/trpc";
import { useFormBlocker } from "./useFormBlocker";
import { useMutation } from "@tanstack/react-query";
import type { DataValues } from "../../types/hooks";
import { useFormData } from "./useFormData";

// TODO: reuse this hook on the updated records and the related data
export const useModifyData = (values:DataValues | any) => {
    const trpc = useTRPC()
    const { setLoading, setNotification, setInputError, inputError } = useStateContext()

    // Customs hooks 🪝
    const { blocker } = useFormBlocker()
    const { formData, setFormData } = useFormData(values)
   
    const updateData = useMutation(trpc.data.update.mutationOptions())

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
      updateData.mutate(formData, {
        onSuccess: (data, variables)=>{
          console.log(data)
          console.log(variables)
          setLoading(false)
          setInputError([])
          setNotification('Success: Save New Data! ☑️')
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