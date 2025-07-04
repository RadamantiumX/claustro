import { useLogout } from "../../hooks/useLogout"
import React from "react"
import { OffPower } from '../../../icons/offPower';


/**
 * Component to use only on Logout button --> Navbar
 * @returns {React.ReactNode}
 */
export const LogoutButton = ():React.ReactNode =>{
    const { onLogout } = useLogout() // Sign out handle hook
    return(
        <>
         <button className="flex flex-row items-center gap-2 rounded-sm bg-red-400 px-3 py-1 font-bold cursor-pointer" onClick={onLogout}>
            <OffPower/>
            Logout
         </button>
        </>
    )
}