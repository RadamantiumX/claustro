// import { Loader } from "../../icons/icons"
import React from "react"


export const LoginButton:React.FC<{children:React.ReactNode}> = ({children}) =>{
    return(
        <>
        <button type="submit" className="rounded-sm bg-blue-400 px-3 py-1 font-bold opacity-50" disabled>
            {children}
           {/*<div className="flex flex-row items-center gap-x-5"><Loader/> Loading...</div> */}
        </button>
        </>
    )
}