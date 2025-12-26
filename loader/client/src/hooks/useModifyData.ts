/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useMemo, type ChangeEvent, type FormEvent } from "react";
import { useStateContext } from "./useCtxStates";
import { useTRPC } from "../utils/trpc";
import { useFormBlocker } from "./useFormBlocker";
import { useMutation } from "@tanstack/react-query";
import type { DataValues } from "../types/hooks";

export const useModifyData = (dataValues:DataValues | any) => {
    const trpc = useTRPC()
    const { setLoading, setNotification, setInputError, inputError } = useStateContext()
    const { blocker } = useFormBlocker()
    console.log(dataValues.data)
    // TODO: The id is wrong Field!!
    const [ formData, setFormData ] = useState({
        emailSource: "",
        emailSourcePsw: "",
        xUser: "",
        xPsw: "",
        id: 0,
    })
   
   useMemo(()=>{
    setFormData({
      emailSource: dataValues.data.emailSource,
      emailSourcePsw: dataValues.data.emailSourcePsw,
      xUser: dataValues.data.xUser,
      xPsw: dataValues.data.xPsw,
      id: dataValues.data.id
    })
   },[])
    const updateData = useMutation(trpc.data.update.mutationOptions())

     const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      const handleSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> =>{
         try{
      
        e.preventDefault()
      
      // Form incomplete or invalid
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