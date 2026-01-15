import { jwtDecode } from "jwt-decode";
// import { useState, useMemo, type Dispatch, type SetStateAction } from "react";
import { useStateContext } from "./useCtxStates";
import type { CustomPayload } from "../../types";

// Decode USER TOKEN HOOK
export const useDecodeToken = () => {
  const {token} = useStateContext()
   // const [ id, setId ] = useState<Dispatch<SetStateAction<string>>>()
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const decoded:CustomPayload = jwtDecode(token ? token : '')
   
   const userColabId = decoded.id
  // useMemo(()=>{
  //   setId(decoded.id)
  // },[])
  
  return {userColabId}
}