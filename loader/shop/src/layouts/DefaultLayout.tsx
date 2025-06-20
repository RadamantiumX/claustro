import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../shared/ContextProviders"


export default function DefaultLayout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { token }:any = useStateContext()
  if(!token){
   return <Navigate to="/signin"/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}
