import React from "react"
import { LogoutButton } from "../buttons/LogoutButton"
import { NavButton } from "../buttons/NavButton"
import { useStateContext } from "../../hooks/useCtxStates"

/**
 * Only layout Default component Navbar
 * celulares rotos
 * @component
 * @returns {React.ReactNode}
 */
export const Nav = ():React.ReactNode =>{
    const { user } = useStateContext()
    return(
        <>
        <nav className="flex justify-between items-center h-10 px-10 bg-gray-600">
            <NavButton route="#" inner={`${user}`}/>
            <LogoutButton/>
            
        </nav>
        </>
    )
}