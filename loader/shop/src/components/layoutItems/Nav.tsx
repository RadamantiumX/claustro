import React from "react"
import { LogoutButton } from "../buttons/LogoutButton"
import { NavButton } from "../buttons/NavButton"
import { useStateContext } from "../../hooks/useCtxStates"

/**
 * Only layout Default component Navbar
 * 
 * @component
 * @returns {React.ReactNode}
 */
export const Nav = ():React.ReactNode =>{
    const { user } = useStateContext()
    return(
        <>
        <nav className="flex justify-between h-10 bg-gray-600">
            <LogoutButton/>
            <NavButton route="#" inner={`${user}`}/>
        </nav>
        </>
    )
}