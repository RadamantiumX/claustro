import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../shared/ContextProviders"
import { Nav } from "../components/layoutItems/Nav"


export default function DefaultLayout() {
  const { token } = useStateContext()
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
