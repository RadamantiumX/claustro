import React from "react"
import { LogoutButton } from "../buttons/LogoutButton"


/**
 * Only layout Default component Navbar
 * 
 * @component
 * @returns {React.ReactNode}
 */
export const Nav = ():React.ReactNode =>{
    return(
        <>
        <nav className="flex justify-between h-10 bg-gray-600">
            <LogoutButton/>
        </nav>
        </>
    )
}