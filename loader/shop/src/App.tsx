import './App.css'
import {  QueryClientProvider } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { TRPCProvider } from './utils/trpc'
import { getQueryClient } from './config/queryClient'
import type { AppRouter } from '../../factory/src/routers'


function App() {
 const queryClient = getQueryClient()
 const [trpcClient] = useState(()=> createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc'
        }),
      ],
    }),
 )

  return (
    <>
     <QueryClientProvider client={queryClient}>
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient} children={undefined}>
          {/* App Mode */}
        </TRPCProvider>
     </QueryClientProvider>
    </>
  )
}

export default App
