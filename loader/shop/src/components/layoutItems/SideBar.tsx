import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"

export const SideBar = ():React.ReactNode => {
    const {over} = useStateContext()
    return(
        <aside className={over?`bg-amber-700 h-1/2 w-40 transition delay-700 absolute`:'bg-amber-700 h-1/2 w-40 duration-1000 ease-in-out traslate-full'}>
          
        </aside>
    )
}