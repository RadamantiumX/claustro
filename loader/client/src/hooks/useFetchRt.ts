import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
// import { isExpiredToken } from "../helper/tokenExpiration";
// import { jwtDecode } from "jwt-decode";
import { useStateContext } from "./hooks";

export interface JWTPayload {
  id:string
  username: string
  currentDate: string
  isSuperAdmin: boolean
}
export interface DecodedTokenKeys extends JWTPayload {
  iat: Date | number
  exp: Date | number
}
export const useFetchRt = () => {
    const trpc = useTRPC()
    const { refreshToken } = useStateContext()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ payload, setPayload ]:any = useState({
        refreshToken:''
    })
    
    const rt = useMutation(trpc.refreshToken.refresh.mutationOptions())
    const handleMutation = () => {
        
        
            try{
                // const decoded:JWTPayload = jwtDecode(token)
                setPayload({
                    refreshToken: refreshToken
                })
                rt.mutate(payload,{
                    onSuccess: (data, variables) =>{
                        console.log(data)
                        console.log(variables)
                    },
                     onError:(error)=>{
                   console.log(error)
                }
                })

            }catch(error){
                // setToken(null) // Add the the "setToken" param
                console.log(error)
            }
        
    
    }
    return { handleMutation }
}