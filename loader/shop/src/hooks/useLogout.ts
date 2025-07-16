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
const { setToken, setUser } = useStateContext()
  
   // const start = performance.now()
     const onLogout = () =>{
        setTimeout(()=>{
        setToken(null)
        setUser(null)
        Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN)
        Cookies.remove(import.meta.env.VITE_USERNAME)
        },2000)
// const end = performance.now()
    }



    return { onLogout }

}