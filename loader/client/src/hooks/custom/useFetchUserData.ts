import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../utils/trpc"
import { useDecodeToken } from "./useDecode"
import type { UserSettingReq } from "../../types"

export const useFetchUserData = () => {
   const [ userData, setUserData ] = useState<UserSettingReq | null>()
   const trpc = useTRPC()
   const { userColabId } = useDecodeToken()
   const mutationRq = useMutation(trpc.userColab.select.mutationOptions())
  
   const handleFn = () => {
      try{
        mutationRq.mutate({id:userColabId},{
          onSuccess:(data)=>{
            console.log(data)
            setUserData(data)
            // TESTING FORMATING DATE
            const altDate = new Date(data?.createdAt)
            const formatDate = altDate.toDateString()
            //console.log(data?.id)
            console.log(formatDate)
          },
          onError:(error)=>{
            console.log(error)
          },
         
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

