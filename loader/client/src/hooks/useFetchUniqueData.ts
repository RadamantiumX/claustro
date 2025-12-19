import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useFetchUniqueData = () => {
   const [ searchParams ] = useSearchParams()
   
}