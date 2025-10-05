import type{ TRPCLink } from "@trpc/client";
import type { AppRouter } from "../../../factory/src/routers";
import { observable } from "@trpc/server/observable";
// import Cookies from "js-cookie";
// import { isExpiredToken } from "../helper/tokenExpiration";
// import { refreshClient } from "./trpc";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "jwt-decode"
// TODO: adding expiration token conditional
// TODO: trpc custom link sending request to server trpc --> search on google

/*const accessTokenLink: TRPCLink<AppRouter> = () =>{
  return ({ next, op }) =>{
    const { token, setToken } = useStateContext()

    if(token){
        if(isExpiredToken(token)){
          try{
             const newAccessToken = op.
          }catch(error){
            throw new Error('Error on TOKEN')
          }
        }
    }

  }
}*/
/**
 * Some CONCEPT
 * import { TRPCLink, Operation, Observable } from '@trpc/client';

const customFetchLink: TRPCLink<any> = () => {
  return ({ op, next }) => {
    return new Observable((observer) => {
      // Construct your custom request based on 'op'
      const url = `http://localhost:3000/api/trpc/${op.path}`; // Example URL
      const method = op.type === 'query' ? 'GET' : 'POST';
      const body = JSON.stringify(op.input); // Example body for mutation/query

      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Add any custom headers here
        },
        body: method === 'POST' ? body : undefined,
      })
        .then((res) => res.json())
        .then((data) => {
          observer.next({ result: { type: 'data', data } }); // Emit successful response
          observer.complete();
        })
        .catch((error) => {
          observer.error(error); // Emit error
        });
    });
  };
};

// In your tRPC client setup:
// const client = createTRPCClient<AppRouter>({
//   links: [
//     customFetchLink, // Your custom link
//     // Other links if needed
//   ],
// });
 */
/*export const refreshTokenLink:TRPCLink<AppRouter>=()=>{

  return (runtime) => {
    return ({ op }) => {
      return observable((observer)=>{
          const { token }:any = useStateContext()
          const { handleMutation } = useFetchRt()
        const exec = async () => {
          handleMutation(token)
          const result = await op.
        }
      })
    }
  }
}*/


export const customLink:TRPCLink<AppRouter>= () =>{
 

 
  return ({next, op}) =>{
    
    
    
    return observable((observer)=>{
      
      
      console.log('Perf. operation: ', op)
      const unsubscribe = next(op).subscribe({
        next(value){
         /* const token:string | undefined= Cookies.get('CLAUSTRO_ACCESS_TOKEN_dxgKnoEg0uJqHsl7')
          const exec = async ()=>{
            if(token !== undefined){
            if(isExpiredToken(token)){
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const decodedToken:JwtPayload | any = jwtDecode(token)
             const refreshedAccessToken = await refreshClient.refreshToken.refresh.mutate({ userColabId:decodedToken.id })
             console.log(refreshedAccessToken)
             
          }
          }
          }
         */
          //exec()
          console.log('we recibed value', value);
          observer.next(value)
          
        },
        error(err) {
          console.log('we received error', err);
          observer.error(err);
        },
        complete() {
          observer.complete();
          
        },
      })
      
      return unsubscribe
    })
  }
}

/**
 * IA EXAMPLE
 * 
 * import { TRPCLink, Operation, OperationResultEnvelope, HTTPHeaders } from '@trpc/client';
import { observable } from '@trpc/server/observable';

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
}

// Store tokens (e.g., in localStorage or a state management solution)
let authTokens: AuthTokens = {
  accessToken: typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null,
  refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null,
};

const saveTokens = (newTokens: AuthTokens) => {
  authTokens = newTokens;
  if (typeof window !== 'undefined') {
    if (newTokens.accessToken) {
      localStorage.setItem('accessToken', newTokens.accessToken);
    } else {
      localStorage.removeItem('accessToken');
    }
    if (newTokens.refreshToken) {
      localStorage.setItem('refreshToken', newTokens.refreshToken);
    } else {
      localStorage.removeItem('refreshToken');
    }
  }
};

const getAuthHeaders = (): HTTPHeaders => {
  if (authTokens.accessToken) {
    return {
      Authorization: `Bearer ${authTokens.accessToken}`,
    };
  }
  return {};
};

export const refreshTokenLink: TRPCLink<any> = (runtime) => {
  let isRefreshing = false;
  const pendingRequests: { op: Operation; resolve: (value: any) => void; reject: (reason?: any) => void }[] = [];

  const refreshAccessToken = async (): Promise<AuthTokens | null> => {
    if (isRefreshing) {
      // If a refresh is already in progress, wait for it to complete
      return new Promise((resolve, reject) => {
        const checkRefresh = () => {
          if (!isRefreshing) {
            if (authTokens.accessToken) {
              resolve(authTokens);
            } else {
              reject(new Error('Failed to refresh token'));
            }
          } else {
            setTimeout(checkRefresh, 100); // Poll until refresh is done
          }
        };
        checkRefresh();
      });
    }

    isRefreshing = true;
    try {
      // Replace with your actual refresh token API call
      const response = await fetch('/api/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Refresh-Token': authTokens.refreshToken || '',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const newTokens: AuthTokens = await response.json();
      saveTokens(newTokens);
      return newTokens;
    } catch (error) {
      console.error('Error refreshing token:', error);
      saveTokens({ accessToken: null, refreshToken: null }); // Clear tokens on refresh failure
      throw error;
    } finally {
      isRefreshing = false;
      // Process pending requests after refresh
      pendingRequests.forEach(({ op, resolve, reject }) => {
        runtime.transformer.deserialize(
          runtime.links[runtime.links.length - 1]!({ op, next: (op) => runtime.get )
        });
      });
      pendingRequests.length = 0; // Clear pending requests
    }
  };

  return ({ op, next }) => {
    return observable<OperationResultEnvelope>((observer) => {
      const forwardOperation = () => {
        return next(op).subscribe({
          next: (value) => observer.next(value),
          error: async (error) => {
            if (error.message.includes('UNAUTHORIZED') && authTokens.refreshToken && !op.path.startsWith('auth.')) {
              try {
                await refreshAccessToken();
                // Retry the original operation with the new token
                forwardOperation();
              } catch (refreshError) {
                observer.error(error); // Original error if refresh fails
              }
            } else {
              observer.error(error);
            }
          },
          complete: () => observer.complete(),
        });
      };

      if (isRefreshing) {
        // If a refresh is in progress, queue the current request
        pendingRequests.push({
          op,
          resolve: (value) => observer.next(value),
          reject: (reason) => observer.error(reason),
        });
      } else {
        forwardOperation();
      }
    });
  };
};

// Example usage in your tRPC client setup
// import { createTRPCClient, httpBatchLink } from '@trpc/client';
// import { refreshTokenLink } from './refreshTokenLink'; // Adjust path as needed
// import type { AppRouter } from '../server/routers/_app'; // Adjust path as needed

// export const trpcClient = createTRPCClient<AppRouter>({
//   links: [
//     refreshTokenLink, // Your custom refresh token link
//     httpBatchLink({
//       url: '/api/trpc',
//       headers: () => getAuthHeaders(), // Dynamically get headers with the latest token
//     }),
//   ],
// });
 */