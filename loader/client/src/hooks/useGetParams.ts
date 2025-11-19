import { useSearchParams } from "react-router-dom"

export const useGetParams = () => {
  const [searchParams] = useSearchParams()
  const searchP = searchParams.get('search')
  console.log(searchP)
  return { searchP }
}
