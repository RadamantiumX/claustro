import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"

export const SideBar = ():React.ReactNode => {
    const {over} = useStateContext()
    return(
        <aside className={over?`bg-amber-700 h-1/2 w-40 transition duration-1000 translate-1.5 delay-700 ease-in-out absolute`:'bg-amber-700 h-1/2 transition w-40 delay-700 ease-out'}>
          
        </aside>
    )
}