import React from "react"
import { LogoutButton } from "../buttons/LogoutButton"
import { UserLink } from "../buttons/UserLink"
import { MenuButton } from "../buttons/MenuButton"
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
            <MenuButton/>
            <div className="flex flex-row items-center gap-x-2">
                 <UserLink route="#" inner={`${user}`}/>
                 <LogoutButton/>
            </div>
        </nav>
        </>
    )
}