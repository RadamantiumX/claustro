/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStateContext } from "./useCtxStates";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode";

export const useAddData = () => {
    const trpc = useTRPC()
    const { setLoading, setNotification, token } = useStateContext()
    const decoded:any = jwtDecode(token ? token : '')
    
    const [ formData, setFormData ] = useState({
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
      setLoading(true)
      saveData.mutate(formData, {
        onSuccess: (data, variables)=>{
          console.log(data)
          console.log(variables)
          setNotification('Success: Save New Data! ☑️')
        },
        onError: (error)=>{
            console.log(error)
            setNotification('Error: Something went wrong!⚠️')
        }
      })
    }catch(error){
        console.log(error)
    }
  }

  return { formData, handleChange, handleSubmit }
}