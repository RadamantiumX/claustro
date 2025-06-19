/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, Navigate } from "react-router"
import { useStateContext } from "../shared/ContextProviders"

export default function GuestLayout() {
  const { token }:any = useStateContext()
  if(token){
    return <Navigate to='/'/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
