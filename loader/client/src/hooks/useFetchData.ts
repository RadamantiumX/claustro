/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { useStateContext } from "./useCtxStates";
import { useEffect } from "react";

// TODO: finish this mutation
export const useFetchData = () => {
    const trpc = useTRPC()
    const { setData }:any = useStateContext()
    
    const queryRequest = useMutation(trpc.data.list.mutationOptions())
    useEffect(()=>{
        try{
      queryRequest.mutate({page:1, pageSize:5},{
        onSuccess:(data, variables)=>{
            console.log(variables)
          setData(data)
        },
        onError:(error)=>{
          console.log(error)
        }
      })
    }catch(error){
      console.log(error)
    }
    },[])
    

   return
}