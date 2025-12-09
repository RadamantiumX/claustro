import { useStateContext } from "./useCtxStates"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export const useSetParams = () => {
   const { arrayParams } = useStateContext()
   const [ searchParams, setSearchParams ] = useSearchParams()

   useEffect(()=>{
     setSearchParams(arrayParams)
   },[searchParams, arrayParams])
   return
}
