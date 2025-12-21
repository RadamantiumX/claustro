import { useSearchParams } from "react-router-dom"

export const useGetParams = (param:string) => {
  const [ searchParams ] = useSearchParams()
  const searchP = searchParams.get(param)
  return { searchP }
}
