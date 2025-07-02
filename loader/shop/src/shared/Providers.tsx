import { QueryClientProvider } from "@tanstack/react-query";
import type { JSX, PropsWithChildren } from "react";
import { useTrpc } from "../hooks/useTrpc";
import { TRPCProvider } from "../utils/trpc";

/**
 * tRPC Provider Context, to manage the Client, querys and mutations
 * 
 * @param children --> Elements to wrap in this context
 * @returns {JSX.Element}
 */
export const Providers = ({children}: PropsWithChildren):JSX.Element =>{
  const { trpcQueryClient, trpcClient } = useTrpc()
  return(
    <TRPCProvider trpcClient={trpcClient} queryClient={trpcQueryClient}>
        <QueryClientProvider client={trpcQueryClient}>
            {children}
        </QueryClientProvider>
    </TRPCProvider>
  )
}