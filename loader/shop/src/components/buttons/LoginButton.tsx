import React from "react"
import { useStateContext } from "../../hooks/hooks"


export const LoginButton:React.FC<{children:React.ReactNode}> = ({children}) =>{
    const {loading} = useStateContext()
    return(
        <>
        <button type="submit" className={`rounded-sm bg-blue-400 px-3 py-1 font-bold ${loading ? "opacity-50":"cursor-pointer"}`} disabled={loading}>
            {children}
        </button>
        </>
    )
}