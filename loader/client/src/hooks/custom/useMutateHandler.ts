// TODO: See the Docs to fix the reuse mutation with INFERRING TYPES: https://trpc.io/docs/client/vanilla/infer-types
import { useTRPC } from "../../utils/trpc"
import { useMutation } from "@tanstack/react-query"

// TODO: it's working, now, try to fix TYPES ISSUES.
export const useMutateHandler = <T> (key:string, innerKey:string) => {
    const trpc = useTRPC()
 
    const inputInferrring = {
        data:{
           list: trpc.data.list.mutationOptions(),
           create: trpc.data.create.mutationOptions(),
           search: trpc.data.search.mutationOptions(),
           selectForId: trpc.data.selectForId.mutationOptions(),
           selectForEmail: trpc.data.selectForEmail.mutationOptions(),
           update: trpc.data.update.mutationOptions(),
           delete: trpc.data.delete.mutationOptions()
        },
        apiKey:{
           selectForId: trpc.apiKey.selectForId.mutationOptions(),
           create: trpc.apiKey.create.mutationOptions(),
           update: trpc.apiKey.update.mutationOptions(),
           delete: trpc.apiKey.delete.mutationOptions()
        },
        apiData:{
           selectForId: trpc.apiData.selectForId.mutationOptions(),
           create: trpc.apiData.create.mutationOptions(),
           update: trpc.apiData.update.mutationOptions(),
           delete: trpc.apiData.delete.mutationOptions()
        }
    }
    const inputMutation:T = useMutation(inputInferrring[key][innerKey])
    return { inputMutation }
}