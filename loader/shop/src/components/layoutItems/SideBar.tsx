import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"
import { Close } from "../../icons/Close"

export const SideBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`menu-display`:'menu-hide'}>
          <div title="Close Menu" onClick={()=>setOver(false)} className="flex justify-end m-2 cursor-pointer hover:text-yellow-400">
               <Close/>
          </div>
        </aside>
    )
}