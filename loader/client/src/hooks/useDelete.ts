
import { useMutation } from "@tanstack/react-query"
// import { useStateContext } from "./useCtxStates"
import { useTRPC } from "../utils/trpc"
import { useTrpc } from "./useTrpc"
// TODO: change to setStateAction instead functions => EXAMPLE: setId(id) > DELETE
export const useDelete = () => {
   const { trpcQueryClient } = useTrpc()
  const trpc = useTRPC()
  
  const deleteRecord = useMutation(trpc.data.delete.mutationOptions()) 
 
  const handleDelete = async (id:number) => {
     try{
        deleteRecord.mutate({id:id},{
         onSuccess: async (data, variables) =>{
          console.log(data)
          console.log(variables)
          
         await trpcQueryClient.invalidateQueries(trpc.data.list.queryFilter())
         
         },
         onError: (error)=>{
              console.log(error)
         },
         onSettled:async ()=>{
           await trpcQueryClient.invalidateQueries(trpc.data.list.queryFilter())
         },
         
        })
     }catch(error){
        console.log(error)
     }
     
  }

  return { handleDelete }
}