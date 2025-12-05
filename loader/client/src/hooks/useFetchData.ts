/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { useStateContext } from "./useCtxStates";
import { useEffect } from "react";

// TODO: finish this mutation
export const useFetchData = () => {
    const trpc = useTRPC()
    const { setData, setCount }:any = useStateContext()
    
    const queryRequest = useMutation(trpc.data.list.mutationOptions())
    useEffect(()=>{
        try{
      queryRequest.mutate({page:2, pageSize:5},{
        onSuccess:(data, variables)=>{
            console.log(variables)
            console.log(data)
            setData(data.data)
            setCount(data.count)
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