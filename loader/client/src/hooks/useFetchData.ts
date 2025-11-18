import { useQuery, useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { useState } from "react";

// TODO: finish this mutation
export const useFetchData = (query: string | null) => {
    const [ searchData, setSearchData ]:any = useState()
    const trpc = useTRPC()
    if(query){
      const searchQuery = useMutation(trpc.data.create.mutationOptions())
      searchQuery.mutate(query,{
        onSuccess: (data, variables)=>{
           setSearchData(data)
        },
        onError:(error) =>{
          console.log(error)
        }
      })
    }
    const allData = useQuery(trpc.data.list.queryOptions())
   
   const data = allData.data
  return {data, searchData}
}