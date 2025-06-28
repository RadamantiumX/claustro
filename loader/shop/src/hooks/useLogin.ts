/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStateContext } from "../shared/ContextProviders"
import { useState } from "react"
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () =>{
    const trpc = useTRPC()
 
  const { setToken, setUser } = useStateContext()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isSuperAdmin: false
  })
  
  const login = useMutation(trpc.auth.login.mutationOptions())

  const handleChange = (e:any):void => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e:any):Promise<void> => {
     try{
        e.preventDefault()
        console.log(import.meta.env.USERNAME)
    // create.mutate(formData)
      login.mutate(formData,{
        onSuccess: (data, variables)=>{
          setToken(data.accessToken)
          setUser(variables.username)
        }
      })
      

     }catch(error){
       console.log(error)
     }
      
  }

  return { formData, handleChange, handleSubmit }
}