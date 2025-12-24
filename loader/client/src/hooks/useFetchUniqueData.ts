/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { DataValues } from "./useModifyData";

export const useFetchUniqueData = () => {
   const trpc = useTRPC()
   const params:any = useParams()
   const [data, setData] = useState<DataValues>()
   const [apiKeys, setApiKeys] = useState()
   const [apiData, setApiData] = useState()

   const mutationRq = useMutation(trpc.data.selectForId.mutationOptions())
   console.log(params.id)

   const handleFn = async() =>{
      try{
     await mutationRq.mutate({id:parseInt(params.id)},{
      onSuccess:async(data, variables)=>{
         console.log(data)
         console.log(data.data)
         console.log(data.apiKeys)
         console.log(data.apiData)
         console.log(variables)
        await setData(data.data)
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