/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { useStateContext } from "./useCtxStates";
import { useEffect } from "react";

// TODO: finish this mutation
export const useFetchData = () => {
    const trpc = useTRPC()
    const { setData } = useStateContext()
    
    const queryRequest = useQuery(trpc.data.list.queryOptions())
    const allData:any = queryRequest.data
    useEffect(()=>{
        setData(allData)
    },[allData])
   return {  }
}