import { Outlet, Navigate } from "react-router-dom"
import { useStateContext } from "../hooks/useCtxStates"
import { Nav } from "../components/layoutItems/Nav"
import { SideMenuBar } from "../components/layoutItems/SideMenuBar"
import { UserMenuBar } from "../components/layoutItems/UserMenuBar"
import { Footer } from "../components/layoutItems/Footer"
import React from "react"
import { useCloseBar } from "../hooks/useCloseBar"
import { NotificationCard } from "../components/cards/NotificationCard"
import { ConfirmationCard } from "../components/cards/ConfirmationCard"
// import { ConfirmationCard } from "../components/cards/ConfirmationCard"
// import { useFetchRt } from "../hooks/useFetchRt"
/**
 * Layout for Default page or Authenticated user
 * @returns {React.ReactNode}
 */
export default function DefaultLayout():React.ReactNode {
  useCloseBar()
  const { token, notification } = useStateContext()

 
  if(!token){
   return <Navigate to="/signin"/>
  }
  
  return (
    <>
   
      <Nav/>
      <SideMenuBar/>
      <UserMenuBar/>
      {/*<ConfirmationCard/>*/}
      <main className="bg-gray-700"> {/* Add this style => blur-[2px] pointer-events-none */}
          {/*<button className="cursor-pointer mt-20" onClick={()=>{setNotification("Success on save data")}}>Click me</button>*/}
          {notification?.length !== 0 && <NotificationCard/>}
          {/*<ConfirmationCard/>*/}
         
        <Outlet/>
        
      </main>

      <Footer/>
      
    </>
  )
}
