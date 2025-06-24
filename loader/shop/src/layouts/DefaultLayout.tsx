import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../shared/ContextProviders"
import { Nav } from "../components/layoutItems/Nav"


export default function DefaultLayout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { token }:any = useStateContext()
  if(!token){
   return <Navigate to="/signin"/>
  }
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}
