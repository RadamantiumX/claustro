/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStateContext } from "./useCtxStates"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
import type { SignInHandler } from "../types/hooks"
// import { useTrpc } from "./useTrpc"

/**
 * - Custom Hook -
 *  * Use the tRPC hook to manage data mutations options
 *  * Use Context Hook to set Token & User values
 *  * Use State Hook for the FormData, adding initials empty values, for the string (username & password), and false for the boolean (isSuperAdmin)
 *  * Use the mutation Hook to mutate server data
 *  * Handle Change inputs Events
 *  * Handle Submit Event on Form trigger, and mutate the data
 * @returns {SignInHandler}
 */
export const useLogin = ():SignInHandler =>{
    // const { trpcClient } = useTrpc()
    const trpc = useTRPC()
 
  const { setToken, setUser, setLoading, setResponseTime, setBounce, setRefreshToken } = useStateContext()
  const [formData, setFormData]:any = useState({
    username: '',
    password: '',
    isSuperAdmin: false
  })
  
  const login = useMutation(trpc.auth.login.mutationOptions())

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> => {
  
     try{
        e.preventDefault()
        setLoading(true)
      
  
      login.mutate(formData,{
        onSuccess: (data:any, variables:any)=>{
              // const end = performance.now()
              // const resposeTime = end - start
              // console.log(`${resposeTime} miliseconds`)
            
              setToken(data.accessToken)
              setRefreshToken(data.refreshToken)
              setUser(variables.username)
              setLoading(false)
              setResponseTime(0)
              setBounce(false)
        },
        onError:(error)=>{
          console.log(error)
        }
      })
      

     }catch(error){
       console.log(`Heres is the error: ${error}`)
     }
      
  }

  return { formData, handleChange, handleSubmit }
}