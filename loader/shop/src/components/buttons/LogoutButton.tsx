import { useLogout } from "../../hooks/useLogout"
import React from "react"

export const LogoutButton = ():React.ReactNode =>{
    const { onLogout } = useLogout()
    return(
        <>
         <button className="cursor-pointer" onClick={onLogout}>
            Logout
         </button>
        </>
    )
}