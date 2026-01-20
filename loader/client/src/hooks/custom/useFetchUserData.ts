import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../utils/trpc"
import { useDecodeToken } from "./useDecode"

export const useFetchUserData = () => {
   const [ userData, setUserData ] = useState()
   const trpc = useTRPC()
   const { userColabId } = useDecodeToken()

   const mutationRq = useMutation(trpc.userColab.select.mutationOptions())
 
   // TODO: TRY TO REDUCE THE REQUEST DATA FROM THE SERVER SIDE
   const handleFn = () => {
      try{
        mutationRq.mutate({id:userColabId},{
          onSuccess:(data)=>{
            console.log(data)
            // TESTING FORMATING DATE
            const altDate = new Date(data.createdAt)
            const formatDate = altDate.toDateString()
            console.log(formatDate)
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

/**
 * REQUEST RESPONSE
 * 
 * {
    id: 'bf93c00b-d68f-4875-8bf3-674922349498',
    username: 'radamantium',
    email: null,
    lastSignIn: '2026-01-20T18:12:22.951Z',
    createdAt: '2025-09-14T02:02:18.114Z',
    updatedAt: null,
    isSuperAdmin: true
  }
 */