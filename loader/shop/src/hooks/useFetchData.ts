import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { useState } from "react";

export const useFetchData = () => {
    const trpc = useTRPC()
    const [loading, setLoading] = useState(false)
    const allData = useQuery(trpc.data.list.queryOptions())
    if(allData.isLoading){
      setLoading(true)
    }
    setLoading(false)
   console.log('Finish Data loading...') 
   const data = allData.data
  return {data, loading}
}