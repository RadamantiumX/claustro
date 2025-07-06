import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"

export const SideBar = ():React.ReactNode => {
    const {over} = useStateContext()
    return(
        <aside className={over?`bg-amber-700 h-full w-40 transition delay-700 absolute`:'hidden'}>
          
        </aside>
    )
}