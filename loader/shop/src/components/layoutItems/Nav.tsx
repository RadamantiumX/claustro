import React from "react"
import { LogoutButton } from "../buttons/LogoutButton"
import { UserLink } from "../buttons/UserLink"
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
            <UserLink route="#" inner={`${user}`}/>
            <LogoutButton/>
            
        </nav>
        </>
    )
}