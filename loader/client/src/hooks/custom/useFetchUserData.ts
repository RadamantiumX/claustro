import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../utils/trpc"
import { useDecodeToken } from "./useDecode"

export const useFetchUserData = () => {
   const [ userData, setUserData ] = useState()
   const trpc = useTRPC()
   const { userColabId } = useDecodeToken()

   const mutationRq = useMutation(trpc.userColab.select.mutationOptions())

   const handleFn = () => {
      try{
        mutationRq.mutate({id:userColabId},{
          onSuccess:(data)=>{
            console.log(data)
          },
          onError:(error)=>{
            console.log(error)
          }
        })
      }catch(error){
        console.log(error)
      }
   }

   useEffect(()=>{
      handleFn()
   },[])

   return {userData}
}