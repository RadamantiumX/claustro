import type{ TRPCLink } from "@trpc/client";
import type { AppRouter } from "../../../factory/src/routers";
import { useStateContext } from "../hooks/useCtxStates";
import { isExpiredToken } from "../helper/tokenExpiration";
// TODO: adding expiration token conditional

const accessTokenLink: TRPCLink<AppRouter> = (runtime) => (ctx) =>{
  return (next) => async (op) =>{
    const { token, setToken } = useStateContext()

    if(token){
        if(isExpiredToken(token)){
          
        }
    }

  }
}