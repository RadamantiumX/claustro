import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"

export const SideBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)} onMouseLeave={()=>setOver(false)} className={over?`bg-amber-700 h-1/2 w-40 transition duration-1000 translate delay-700 ease-in-out absolute`:''}>
          
        </aside>
    )
}