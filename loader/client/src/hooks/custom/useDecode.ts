import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useStateContext } from "./useCtxStates";

export const useDecodeToken = () => {
  const {token} = useStateContext()
   const [ id, setId ] = useState()
   const decoded:any = jwtDecode(token ? token : '')
   // TODO: finish this

}