import { useState } from "react";
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
   
    const [ payload, setPayload ] = useState({
        userColabId:''
    })
    const rt = useMutation(trpc.refreshToken.refresh.mutationOptions())
    const handleMutation = (token:string) => {
        if(token){
        if(isExpiredToken(token)){
            try{
                const decoded:JWTPayload = jwtDecode(token)
                setPayload({
                    userColabId: decoded.id
                })
                rt.mutate(payload,{
                    onSuccess: (data, variables) =>{
                        console.log(data)
                        console.log(variables)
                    },
                     onError:(error)=>{
                   console.log(error.data)
                }
                })

            }catch(error){
                console.log(error)
            }
        }
    }
    }
    return { handleMutation }
}