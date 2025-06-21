import { useStateContext } from "../../shared/ContextProviders"
// import Cookies from "js-cookie"

export const LogoutButton = () =>{
   const { setToken, setUser }:any = useStateContext()
    const onLogout = () =>{
        setToken(null)
        setUser({})
    }
    return(
        <>
         <button className="cursor-pointer" onClick={onLogout}>
            Logout
         </button>
        </>
    )
}