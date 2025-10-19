import { useStateContext } from "./useCtxStates"
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
const { setToken, setUser, setResponseTime, setShow } = useStateContext()
  
    
     const onLogout = () =>{
        setResponseTime(2)
        setTimeout(()=>{
        setToken(null)
        setUser(null)
        setShow(false)
        Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN)
        Cookies.remove(import.meta.env.VITE_USERNAME)
        
        }, 2000)

        
        

    }

   
    return { onLogout }

}