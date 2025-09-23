import type{ TRPCLink } from "@trpc/client";
import type { AppRouter } from "../../../factory/src/routers";
/* import { useStateContext } from "../hooks/useCtxStates";
import { isExpiredToken } from "../helper/tokenExpiration"; */
import { observable } from "@trpc/server/observable";


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

export const customLink:TRPCLink<AppRouter>= () =>{
  return ({next, op}) =>{
    return observable((observer)=>{
      console.log('Perf. operation: ', op)
      const unsubscribe = next(op).subscribe({
        next(value){
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