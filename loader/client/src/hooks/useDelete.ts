
import { useMutation } from "@tanstack/react-query"
// import { useStateContext } from "./useCtxStates"
import { useTRPC, trpcUtils } from "../utils/trpc"


export const useDelete = () => {
 
  const trpc = useTRPC()
  const utils = trpcUtils.useUtils()
  const deleteRecord = useMutation(trpc.data.delete.mutationOptions()) 
 
  const handleDelete = async (id:number) => {
     try{
        deleteRecord.mutate({id:id},{
         onSuccess: (data, variables) =>{
          console.log(data)
          console.log(variables)
          utils.data.invalidate()
         },
         onError: (error)=>{
              console.log(error)
         },
         
        })
     }catch(error){
        console.log(error)
     }
  }

  return { handleDelete }
}