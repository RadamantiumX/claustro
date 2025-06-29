import { useStateContext } from "../shared/ContextProviders"
import Cookies from "js-cookie"
import type { logoutOutput } from "../types/hooks"

export const useLogout = ():logoutOutput =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { setToken, setUser } = useStateContext()
     const onLogout = () =>{
        setToken(null)
        setUser(null)
        Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN)
        Cookies.remove(import.meta.env.VITE_USERNAME)
    }

    return { onLogout }

}