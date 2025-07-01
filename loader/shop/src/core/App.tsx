import { RouterProvider } from "react-router-dom"
import router from "../router/router"
import { ContextProvider } from "../shared/ContextProviders"
import React from "react"

/**
 * App container - Context Provider wrap all routes
 * @returns {React.ReactNode}
 */
export  const App = ():React.ReactNode => {
  return (
   <>
   <ContextProvider>
     <RouterProvider router={router}/>
   </ContextProvider>
   </>
  )
}

