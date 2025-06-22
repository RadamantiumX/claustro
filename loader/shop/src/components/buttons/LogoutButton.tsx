import { useStateContext } from "../../shared/ContextProviders"
import Cookies from "js-cookie"

export const LogoutButton = () =>{
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const { setToken, setUser }:any = useStateContext()
    const onLogout = () =>{
        setToken(null)
        setUser({})
        Cookies.remove(import.meta.env.ACCESS_TOKEN)
        Cookies.remove(import.meta.env.USERNAME)
    }
    return(
        <>
         <button className="cursor-pointer" onClick={onLogout}>
            Logout
         </button>
        </>
    )
}