import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { Footer } from "../components/layoutItems/Footer"

/**
 * Layout for Guests pages 
 * @returns {React.ReactNode}
 */
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
