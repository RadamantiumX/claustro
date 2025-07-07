import { useLogout } from "../../hooks/useLogout"
import { useStateContext } from "../../hooks/useCtxStates";
import React from "react"
import { OffPower } from '../../icons/offPower';


/**
 * Component to use only on Logout button --> Navbar
 * @returns {React.ReactNode}
 */
export const LogoutButton = ():React.ReactNode =>{
    const { onLogout } = useLogout() // Sign out handle hook
    const { setBounce } = useStateContext()
    const onMouseOn= () =>{
        setBounce(true)
    }
    const onMouseOff = () =>{
        setBounce(false)
    }
    return(
        <>
         <button className="flex flex-row items-center gap-2 rounded-sm bg-red-400 px-3 py-1 font-bold cursor-pointer" onMouseOver={onMouseOn} onMouseLeave={onMouseOff} onClick={onLogout}>
            <OffPower/>
            Logout
         </button>
        </>
    )
}