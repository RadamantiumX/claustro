import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";

export const useFetchData = () => {
    const trpc = useTRPC()
    const [data, setData] = useState([])

    const allData = useQuery(trpc.data.list.queryOptions())

    setData([allData,...data])
    return {data}
}