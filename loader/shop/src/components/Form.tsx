/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

export default function Form() {
  const trpc = useTRPC()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isSuperAdmin: false
  })
  
  const create = useMutation(trpc.userColab.create.mutationOptions())

  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e:any) => {
     try{
        e.preventDefault()
     create.mutate(formData)
      
     }catch(error){
       console.log(error)
     }
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="username" name="username" type="text" placeholder="username" value={formData.username} onChange={handleChange}/>
      <input id="password" name="password" type="password" placeholder="password" value={formData.password} onChange={handleChange}/>
      
      <button type="submit">Register</button>
    </form>
  )
}
