import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useTRPC } from "../../utils/trpc";
import { useStateContext } from "../hooks";

// Fetch the REFRESH TOKEN 
export const useFetchRt = () => {
    const trpc = useTRPC()
    const { refreshToken } = useStateContext()
    const [ payload, setPayload ] = useState<{refreshToken:string}>({
        refreshToken:''
    })
    // TRPC mutation refresh token to SERVER SIDE
    const rt = useMutation(trpc.refreshToken.refresh.mutationOptions())
    const handleMutation = () => {
            try{
                setPayload({
                    refreshToken: refreshToken as string
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
                console.log(error)
            }
        
    
    }
    return { handleMutation }
}