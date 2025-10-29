import { useTRPC } from "../utils/trpc"
import { useMutation } from "@tanstack/react-query"
// import { useStateContext } from "./useCtxStates"

export const useDelete = () => {
  const trpc = useTRPC()
  const deleteRecord = useMutation(trpc.data.delete.mutationOptions()) 
   
  const handleDelete = async (id:number) => {
     try{
        deleteRecord.mutate({id:id},{
         onSuccess: (data, variables) =>{
          console.log(data)
          console.log(variables)
          
         },
         onError: (error)=>{
              console.log(error)
         },
         
        }).
     }catch(error){
        console.log(error)
     }
  }

  return { handleDelete }
}