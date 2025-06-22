import { useLogout } from "../../hooks/useLogout"

export const LogoutButton = () =>{
    const { onLogout } = useLogout()
    return(
        <>
         <button className="cursor-pointer" onClick={onLogout}>
            Logout
         </button>
        </>
    )
}