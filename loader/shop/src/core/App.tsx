import { RouterProvider } from "react-router-dom"
import router from "../router/router"
import { ContextProvider } from "../shared/ContextProviders"

export  const App = () => {
  return (
   <>
   <ContextProvider>
     <RouterProvider router={router}/>
   </ContextProvider>
   </>
  )
}

