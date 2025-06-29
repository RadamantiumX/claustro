import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../shared/ContextProviders"
import { Footer } from "../components/layoutItems/Footer"

export default function GuestLayout() {
  const { token } = useStateContext()
  if(token){
    return <Navigate to='/index'/>
  }
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}
