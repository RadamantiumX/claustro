import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
// import { useState } from "react";
import { useStateContext } from "./useCtxStates";

export const useFetchData = () => {
   // const [data, setData]:any = useState()
    const trpc = useTRPC()
    const { setLoading } = useStateContext()
    const allData = useQuery(trpc.data.list.queryOptions())
    if(allData.isPending){
      
        setLoading(true)
    }
   setLoading(false) 
   const data = allData.data
  return {data}
}