import React from "react"
import { NavProgressBar } from "../misc/NavProgressBar"
import { UserLink } from "../buttons/UserLink"
import { MenuButton } from "../buttons/MenuButton"
import { useStateContext } from "../../hooks/hooks"
import { ChevronButton } from "../buttons/ChevronButton"

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
            <MenuButton/>
            <div className="flex flex-row items-center gap-x-2">
                 <UserLink route="#" inner={`${user}`}/>
                 <ChevronButton/>
            </div>
            </div>
            <NavProgressBar/>
        </nav>
        </>
    )
}