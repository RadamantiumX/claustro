import { useStateContext } from "../shared/ContextProviders"
import Cookies from "js-cookie"

export const useLogout = () =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { setToken, setUser }:any = useStateContext()
     const onLogout = () =>{
        setToken(null)
        setUser({})
        Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN)
        Cookies.remove(import.meta.env.VITE_USERNAME)
    }

    return { onLogout }

}