/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStateContext } from "./useCtxStates";
import {  useState,type ChangeEvent, type FormEvent } from "react";
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode";
import { useFormBlocker } from "./useFormBlocker";


/**
 * TODO:  REUSE THIS HOOK!!! 
 * */
export interface FormData {
        emailSource:string;
        emailSourcePsw: string;
        xUser:string;
        xPsw:string;
        userColabId: string;
}

export const useAddData =  () => {
    const trpc = useTRPC()
    const { setLoading, setNotification, token, setInputError, inputError } = useStateContext()
   
    const decoded:any = jwtDecode(token ? token : '') // HERE IS THE PRISMA ERROR P2002 
    const { blocker } = useFormBlocker()
    const [ formData, setFormData ] = useState<FormData>({
        emailSource:'',
        emailSourcePsw: '',
        xUser:'',
        xPsw:'',
        userColabId: decoded.id
    })

    const saveData = useMutation(trpc.data.create.mutationOptions())

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit =async (e:FormEvent<HTMLFormElement>):Promise<void> => {
      
    try{
      
        e.preventDefault()
      
      // Form incomplete or invalid
      if(blocker.state === "blocked"){
        blocker.proceed()
      }
      setLoading(true)
      saveData.mutate(formData, {
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

/**
 * ERROR RESPONSE EXAMPLE:
 * [
 *  {
      code: 'too_small',
      minimum: 5,
      type: 'string',
      inclusive: true,
      exact: false,
      message: 'Too short entry',
      path: [ 'emailSourcePsw' ]
    }
   ]
 * 
 * 
 */