import { useState } from "react";
import { useStateContext } from "./useCtxStates";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { isExpiredToken } from "../helper/tokenExpiration";
import { jwtDecode } from "jwt-decode";


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
    const { token, setToken } = useStateContext()
    const [ payload, setPayload ] = useState({
        userColabId:''
    })
    const rt = useMutation(trpc.refreshToken.refresh.mutationOptions())
    if(token){
        if(isExpiredToken(token)){
            try{
                const decoded:JWTPayload = jwtDecode(token)
                setPayload({
                    userColabId: decoded.id
                })
                rt.mutate(payload,{
                    onSuccess: (data, variables) =>{
                        setToken(data.newAccessToken)
                    }
                })

            }catch(error){
                console.log(error)
            }
        }
    }
}