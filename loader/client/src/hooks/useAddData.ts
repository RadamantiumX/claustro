import { useStateContext } from "./useCtxStates";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query"

export const useAddData = () => {
    const trpc = useTRPC()
    const { setLoading, setNotification, token } = useStateContext()
    const [ formData, setFormData ] = useState({
        emailSource:'',
        emailSourcePsw: '',
        xUser:'',
        xPsw:'',
        userColabId:''
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
          setNotification('Success on Save New Data!')
        }
      })
    }catch(error){
        console.log(error)
    }
  }
}