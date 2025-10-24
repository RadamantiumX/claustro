import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { Nav } from "../components/layoutItems/Nav"
import { SideMenuBar } from "../components/layoutItems/SideMenuBar"
import { UserMenuBar } from "../components/layoutItems/UserMenuBar"
import { Footer } from "../components/layoutItems/Footer"
import React from "react"
import { useCloseBar } from "../hooks/useCloseBar"
import { NotificationCard } from "../components/cards/NotificationCard"
// import { useFetchRt } from "../hooks/useFetchRt"
/**
 * Layout for Default page or Authenticated user
 * @returns {React.ReactNode}
 */
export default function DefaultLayout():React.ReactNode {
  useCloseBar()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { token, notification, setNotification } = useStateContext()

 
  if(!token){
   return <Navigate to="/signin"/>
  }
  
  return (
    <>
   
      <Nav/>
      <SideMenuBar/>
      <UserMenuBar/>
      <main className="bg-gray-700">
          <button className="cursor-pointer mt-20" onClick={()=>{setNotification("Success on save data")}}>Click me</button>
          {notification?.length !== 0 && <NotificationCard/>}
       
    
        <Outlet/>
        
      </main>

      <Footer/>
      
    </>
  )
}
