import React from "react"
import { Loader } from "../../icons/Loader"


export const FormButton:React.FC<{children:React.ReactNode, loading:boolean}> = ({children, loading}) =>{
    
    return(
        <>
        <button type="submit" className={`rounded-sm bg-blue-400 px-3 py-1 font-bold ${loading ? "opacity-50":"cursor-pointer"}`} disabled={loading}>
            {// Change inner button content --> State depending
                              !loading ? children : <div className="flex flex-row items-center gap-x-5"><Loader/> Loading...</div>
            }
        </button>
        </>
    )
}