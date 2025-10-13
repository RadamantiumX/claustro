import React from "react"
import { useStateContext } from "../../hooks/hooks"
import { Close } from "../../icons/icons"

export const SideMenuBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`side-menu-display`:'side-menu-hide'}>
          <div title="Close Menu" onClick={()=>setOver(false)} className="hover-close">
              <button className="text-amber-50 z-50 block">Some Item</button>
               <Close/>
          </div>
        </aside>
    )
}