import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { Nav } from "../components/layoutItems/Nav"
import { SideBar } from "../components/layoutItems/SideBar"
import { Footer } from "../components/layoutItems/Footer"

import React from "react"
import { useCloseBar } from "../hooks/useCloseBar"

/**
 * Layout for Default page or Authenticated user
 * @returns {React.ReactNode}
 */
export default function DefaultLayout():React.ReactNode {
  useCloseBar()
  const { token } = useStateContext()
  if(!token){
   return <Navigate to="/signin"/>
  }
  return (
    <>
   
      <Nav/>
      <SideBar/>
      <main className="bg-gray-700">
        <Outlet/>
      </main>
      <Footer/>
      
    </>
  )
}
