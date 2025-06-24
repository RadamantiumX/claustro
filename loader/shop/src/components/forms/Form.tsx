/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import {CustomButton} from '../buttons/CustomButton'
import { useStateContext } from "../../shared/ContextProviders"

export const Form=()=> {
  const trpc = useTRPC()
  const { setToken, setUser }:any = useStateContext()
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSuccess: (data, variables, context)=>{
          setToken(data.accessToken)
          setUser(variables.username)
        }
      })
      

     }catch(error){
       console.log(error)
     }
      
  }

  return (
    <div className="flex flex-col items-center">

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input className="py-1 px-2 rounded-sm" id="username" name="username" type="text" placeholder="username" value={formData.username} onChange={handleChange}/>
      <input className="py-1 px-2 rounded-sm" id="password" name="password" type="password" placeholder="password" value={formData.password} onChange={handleChange}/>
      <CustomButton inner="Login"  typeBtn="submit" />
    </form>
    </div>
    
  )
}
