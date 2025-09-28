import { useState } from "react";
import { useStateContext } from "./useCtxStates";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import { isExpiredToken } from "../helper/tokenExpiration";
import { jwtDecode } from "jwt-decode";

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
                const decoded = jwtDecode(token)
                setPayload({
                    userColabId: decoded.id
                })
                rt.mutate()

            }catch(error){
                console.log(error)
            }
        }
    }
}