import { useStateContext } from "../shared/ContextProviders"
import Cookies from "js-cookie"
import type { LogoutOutput } from "../types/hooks"

/**
 * - Custom Hook -
 *  * Use Context Hook to set Token & User values
 *  * Handle logout to make nullish token and user states
 *  * Removes cookies values
 * @returns {SignInHandler}
 */
export const useLogout = ():LogoutOutput =>{
    const { setToken, setUser } = useStateContext()
     const onLogout = () =>{
        setToken(null)
        setUser(null)
        Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN)
        Cookies.remove(import.meta.env.VITE_USERNAME)
    }

    return { onLogout }

}