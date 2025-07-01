import { useStateContext } from "../../shared/ContextProviders"
import React from "react"

/**
 * Index page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Index():React.ReactNode {

   const { user } = useStateContext()
  return (
    <main>
      Welcome {user}
    </main>
  )
}
