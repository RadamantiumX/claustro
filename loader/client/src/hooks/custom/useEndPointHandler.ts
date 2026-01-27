/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: See the Docs to fix the reuse mutation with INFERRING TYPES: https://trpc.io/docs/client/vanilla/infer-types
import type { EndPoint } from "../../types";
import { useTRPC } from "../../utils/trpc";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";


export type MutationResultType = UseMutationResult<unknown, Error, void, unknown>

// TRPc end-points OBJECT LITERAL conditional
// Param @endPoint --> TRPc Hook APP-ROUTER instance
// TODO: it's working, now, try to fix TYPES ISSUES.
export const useEndPointHandler = <T> (endPoint:EndPoint) => {
    const trpc = useTRPC()
  
    const inputInferring:MutationResultType | any = {
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
        },
        auth:{
           login: trpc.auth.login.mutationOptions(),
           register: trpc.auth.register.mutationOptions(),
           logout: trpc.auth.logout.mutationOptions()
        },
        userColab:{
           list: trpc.userColab.list.queryOptions(),
           create: trpc.userColab.create.mutationOptions(),
           delete: trpc.userColab.delete.mutationOptions(),
           update: trpc.userColab.update.mutationOptions(),
           updateUsername: trpc.userColab.updateUsername.mutationOptions(),
           updateEmail: trpc.userColab.updateEmail.mutationOptions(),
           updatePassword: trpc.userColab.updatePassword.mutationOptions()
        }
    }
    const inputMutation = useMutation<T | MutationResultType>(inputInferring[endPoint.route][endPoint.method])
    return { inputMutation }
}