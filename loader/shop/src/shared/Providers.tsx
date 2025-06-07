import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { useTrpc } from "../hooks/useTrpc";
import { TRPCProvider } from "../utils/trpc";

export const Providers = ({children}: PropsWithChildren) =>{
  const { trpcQueryClient, trpcClient } = useTrpc()
  return(
    <TRPCProvider trpcClient={trpcClient} queryClient={trpcQueryClient}>
        <QueryClientProvider client={trpcQueryClient}>
            {children}
        </QueryClientProvider>
    </TRPCProvider>
  )
}