import { useLogout } from "../../hooks/useLogout"
import React from "react"

/**
 * Component to use only on Logout button --> Navbar
 * @returns {React.ReactNode}
 */
export const LogoutButton = ():React.ReactNode =>{
    const { onLogout } = useLogout() // Sign out handle hook
    return(
        <>
         <button className="rounded-sm bg-red-400 px-3 py-1 font-bold cursor-pointer" onClick={onLogout}>
            Logout
         </button>
        </>
    )
}