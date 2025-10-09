import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { Nav } from "../components/layoutItems/Nav"
import { SideMenuBar } from "../components/layoutItems/SideMenuBar"
import { UserMenuBar } from "../components/layoutItems/UserMenuBar"
import { Footer } from "../components/layoutItems/Footer"
import React from "react"
import { useCloseBar } from "../hooks/useCloseBar"
import { isExpiredToken } from "../helper/tokenExpiration"
/**
 * Layout for Default page or Authenticated user
 * @returns {React.ReactNode}
 */
export default function DefaultLayout():React.ReactNode {
  useCloseBar()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { token }:any = useStateContext()
  
  if(token){
    if(isExpiredToken(token)){
    console.log('Token is expired')
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
