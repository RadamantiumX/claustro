import React from "react"
import { NavProgressBar } from "../misc/NavProgressBar"
import { UserButton } from "../buttons/UserButton"
import { SideBarButton } from "../buttons/SideBarButton"
import { useStateContext } from "../../hooks/hooks"


/**
 * Only layout Default component Navbar
 * celulares rotos
 * @component
 * @returns {React.ReactNode}
 */
export const Nav = ():React.ReactNode =>{
    const { user, setOver } = useStateContext()
    return(
        <>
        <nav onClick={()=>setOver(false)} className="bg-gray-600">
            <div className="flex justify-between items-center h-10 px-10">
            <SideBarButton/>
            <div className="flex flex-row items-center gap-x-2">
                 <UserButton inner={`${user}`}/>
            </div>
            </div>
            <NavProgressBar/>
             
        </nav>
        
        </>
    )
}