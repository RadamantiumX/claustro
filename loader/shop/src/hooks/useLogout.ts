import { useStateContext } from "../shared/ContextProviders"
import Cookies from "js-cookie"
import type { LogoutOutput } from "../types/hooks"

/**
 * 
 * @returns 
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