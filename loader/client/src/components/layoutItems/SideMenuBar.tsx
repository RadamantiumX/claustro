import React from "react"
import { useStateContext } from "../../hooks/hooks"
import { SideMenuLinks } from "../buttons/SideMenuLinks"
import buttons from '../../assets/buttonmock.json'
import { Home, Plus, Dashboard } from "../../icons/icons"

const icons = [
  <Home/>,
  <Dashboard/>,
  <Plus/>
]

export const SideMenuBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`side-menu-display`:'side-menu-hide'}>
          <div className="m-2 flex flex-col gap-y-5">
           
        
          {buttons.buttons.map((item, key)=>(
            <div className="flex flex-row items-center">
              { icons[key] }
            <SideMenuLinks path={item.path} key={key}>{item.name}</SideMenuLinks>
            
            </div>
          ))}
            
          </div>
        </aside>
    )
}