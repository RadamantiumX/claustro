/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useParams, type Params } from "react-router-dom";
import { useState, useEffect } from "react";
import type { DataReq, ApiDataReq, ApiKeysReq } from "../../types";


// Fetching all related DATA from DATA ID
export const useFetchCascade =() => {
   const trpc = useTRPC()
   const {id}:Readonly<Params<string>> = useParams()
   const [data, setData] = useState<DataReq>()
   const [apiKeys, setApiKeys] = useState<ApiKeysReq | null>()
   const [apiData, setApiData] = useState<ApiDataReq | null>()

   const mutationRq = useMutation(trpc.data.selectForId.mutationOptions())
   console.log(id)

   const handleFn = async() =>{
      try{
      mutationRq.mutate({id:parseInt(id as string)},{
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
       
   },[id])
  

   return { data, apiKeys, apiData, id }
}