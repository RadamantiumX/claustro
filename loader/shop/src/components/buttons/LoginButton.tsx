import React from "react"
import { useStateContext } from "../../hooks/hooks"


export const LoginButton:React.FC<{children:React.ReactNode}> = ({children}) =>{
    const {disabled} = useStateContext()
    return(
        <>
        <button type="submit" className={`rounded-sm bg-blue-400 px-3 py-1 font-bold ${disabled ? "opacity-50":"cursor-pointer"}`} disabled={disabled}>
            {children}
        </button>
        </>
    )
}