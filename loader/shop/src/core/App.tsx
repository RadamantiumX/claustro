import { RouterProvider } from "react-router-dom"
import router from "../router/router"
import { ContextProvider } from "../shared/ContextProviders"
import React from "react"

export  const App = ():React.ReactNode => {
  return (
   <>
   <ContextProvider>
     <RouterProvider router={router}/>
   </ContextProvider>
   </>
  )
}

