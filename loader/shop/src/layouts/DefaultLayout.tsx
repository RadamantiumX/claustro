import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { useEffect } from "react"
import { Nav } from "../components/layoutItems/Nav"
import { SideMenuBar } from "../components/layoutItems/SideMenuBar"
import { UserMenuBar } from "../components/layoutItems/UserMenuBar"
import { Footer } from "../components/layoutItems/Footer"
import { jwtDecode } from "jwt-decode"
import React from "react"
import { useCloseBar } from "../hooks/useCloseBar"

/**
 * Layout for Default page or Authenticated user
 * @returns {React.ReactNode}
 */
export default function DefaultLayout():React.ReactNode {
  useCloseBar()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { token }:any = useStateContext()
  
  if(token !== null){
    const decoded:any = jwtDecode(token)
    const verifyToken = () => {
    const currentTime = Date.now() /1000
    console.log(`exp: ${decoded.exp}`)
    console.log(`current time: ${currentTime}`)
    return decoded?.exp < currentTime;
  }
  if(verifyToken){
    console.log('The token it\'s expired')
  }
  }
 
  if(!token){
   return <Navigate to="/signin"/>
  }
  
  return (
    <>
   
      <Nav/>
      <SideMenuBar/>
      <UserMenuBar/>
      <main className="bg-gray-700">
        <Outlet/>
      </main>
      <Footer/>
      
    </>
  )
}
