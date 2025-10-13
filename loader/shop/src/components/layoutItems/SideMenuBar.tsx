import React from "react"
import { useStateContext } from "../../hooks/hooks"
import { Close } from "../../icons/icons"

export const SideMenuBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`side-menu-display`:'side-menu-hide'}>
          <div className="m-20">
           <button className="text-amber-50 block">Some Item</button>
          <div title="Close Menu" onClick={()=>setOver(false)} className="hover-close">
             
               <Close/>
          </div>
          </div>
        </aside>
    )
}