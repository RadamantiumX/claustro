/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

export default function Form() {
  const trpc = useTRPC()
  // 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    isSuperAdmin: false
  })
  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e:any) => {
      e.preventDefault()
      const create = useMutation(trpc.userColab.create(formData))
      return
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="username" name="username" type="text" placeholder="username" value={formData.username} onChange={handleChange}/>
      <input id="password" name="password" type="password" placeholder="password" value={formData.password} onChange={handleChange}/>
      
      <button type="submit">Register</button>
    </form>
  )
}
