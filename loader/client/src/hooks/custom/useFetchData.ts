/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../../utils/trpc";
// import { useStateContext } from "./useCtxStates";
import { useEffect, useState } from "react";

// TODO: finish this mutation
// FETCH all DATA
export const useFetchData = (page:number) => {
    const trpc = useTRPC()
    // const { setData, setCount }:any = useStateContext()
    const [fetchData, setFetchData]:any = useState([])
    
    const [responseCount, setResponseCount]:any = useState(0)
    const mutationRq = useMutation(trpc.data.list.mutationOptions())
    useEffect(()=>{
   
        try{
      mutationRq.mutate({page:page, pageSize:5},{
        onSuccess:(data, variables)=>{
            console.log(variables)
            console.log(data)
            setFetchData(data.data)
            setResponseCount(data.count)
        },
        onError:(error)=>{
          console.log(error)
        },
        
      })
    }catch(error){
      console.log(error)
    }
    },[page])
    

   return {fetchData, responseCount}
}