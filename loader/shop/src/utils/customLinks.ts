import type{ TRPCLink } from "@trpc/client";
import type { AppRouter } from "../../../factory/src/routers";
import { useStateContext } from "../hooks/useCtxStates";
import { isExpiredToken } from "../helper/tokenExpiration";


// TODO: adding expiration token conditional
// TODO: trpc custom link sending request to server trpc --> search on google

const accessTokenLink: TRPCLink<AppRouter> = (runtime) => (ctx) =>{
  return (next) => async (op) =>{
    const { token, setToken } = useStateContext()

    if(token){
        if(isExpiredToken(token)){
          try{
             const newAccessToken = await runtime.ser
          }catch(error){
            throw new Error('Error on TOKEN')
          }
        }
    }

  }
}
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