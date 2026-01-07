import { jwtDecode } from "jwt-decode";
import { useState, useMemo } from "react";
import { useStateContext } from "./useCtxStates";

export const useDecodeToken = () => {
  const {token} = useStateContext()
   const [ id, setId ] = useState()
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const decoded:any = jwtDecode(token ? token : '')
  useMemo(()=>{
    setId(decoded.id)
  },[])

  return {id}
}