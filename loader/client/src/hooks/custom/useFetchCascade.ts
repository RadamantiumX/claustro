/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { DataSelectForIdOutput } from "../../types";

export const useFetchCascade =<T extends DataSelectForIdOutput> () => {
   const trpc = useTRPC()
   const params:any = useParams()
   const [data, setData] = useState()
   const [apiKeys, setApiKeys] = useState({})
   const [apiData, setApiData] = useState({})

   const mutationRq = useMutation(trpc.data.selectForId.mutationOptions())
   console.log(params.id)

   const handleFn = async() =>{
      try{
      mutationRq.mutate({id:parseInt(params.id)},{
      onSuccess:(data)=>{
         console.log(data)
         console.log(data?.data.id)
         console.log(data?.apiKeys)
         console.log(data?.apiData)
         setData(data?.data)
         setApiData(data?.apiData)
         setApiKeys(data?.apiKeys)
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