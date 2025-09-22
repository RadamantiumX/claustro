import { jwtDecode } from "jwt-decode"
import type { JwtPayload } from "jwt-decode"

export const isExpiredToken = (token:string) =>{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken:JwtPayload | undefined | any = jwtDecode(token)
  const currentTime =  Date.now() /1000

  return decodedToken?.exp < currentTime
}