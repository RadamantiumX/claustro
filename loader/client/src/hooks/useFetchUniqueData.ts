/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const useFetchUniqueData = () => {
   const trpc = useTRPC()
   const params:any = useParams()
   const [relatedData, setRelatedData] = useState([])
   const mutationRq = useMutation(trpc.data.selectForId.mutationOptions())
   console.log(params.id)
   useEffect(()=>{
       try{
      mutationRq.mutate({id:parseInt(params.id)},{
      onSuccess:(data, variables)=>{
         console.log(data)
         console.log(variables)
      },
      onError:(error)=>{
         console.log(error)
      }
     })
   }catch(error){
     console.log(error)
   }
   },[])
  

   return { relatedData }
}