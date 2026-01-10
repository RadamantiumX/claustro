/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export const useFetchCascade = () => {
   const trpc = useTRPC()
   const params:any = useParams()
   const [data, setData] = useState({})
   const [apiKeys, setApiKeys] = useState()
   const [apiData, setApiData] = useState()

   const mutationRq = useMutation(trpc.data.selectForId.mutationOptions())
   console.log(params.id)

   const handleFn = async() =>{
      try{
      mutationRq.mutate({id:parseInt(params.id)},{
      onSuccess:(data, variables)=>{
         console.log(data)
         console.log(data.data)
         console.log(data.apiKeys)
         console.log(data.apiData)
         console.log(variables)
         setData({id:data.id, emailSource: data.emailSource, emailSourcePsw:data.emailSourcePsw, xUser: data.xUser, xPsw: data.xPsw})
         setApiData(data.apiData)
         setApiKeys(data.apiKeys)
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
       
   },[params])
  

   return { data, apiKeys, apiData }
}