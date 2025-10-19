import { QueryClient } from '@tanstack/react-query';

/**
 * Manage the caching and fetching use instance of {QueryClient}
 * @returns {QueryClient}
 */
function makeQueryClient():QueryClient {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            }
        }
    })
}

let browserQueryClient:QueryClient | undefined = undefined

// Using QueryClient Instance
export function getQueryClient(){
    if(typeof window === 'undefined'){
        return makeQueryClient()
    }else{
        if(!browserQueryClient) browserQueryClient = makeQueryClient()
            return browserQueryClient
    }

}