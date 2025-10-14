import React from "react"
import { useStateContext } from "../../hooks/hooks"
import { Close } from "../../icons/icons"
import { SideMenuLinks } from "../buttons/SideMenuLinks"
import buttons from '../../assets/buttonmock.json'

export const SideMenuBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`side-menu-display`:'side-menu-hide'}>
          <div className="m-2 flex flex-col">
           
          <div title="Close Menu" onClick={()=>setOver(false)} className="hover-close">
             
               <Close/>
          </div>
          {buttons.buttons.map((item, keys)=>(
            <SideMenuLinks path={item.path} key={keys}>{item.name}</SideMenuLinks>
          ))}
            
          </div>
        </aside>
    )
}