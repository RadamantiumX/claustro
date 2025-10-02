import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";

export const useFetchData = () => {
    const trpc = useTRPC()
    const allData = useQuery(trpc.data.list.queryOptions())
   const data = allData.data
  return {data}
}