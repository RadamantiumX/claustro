import React from "react"

export const BasicCard:React.FC<{children:React.ReactNode}> = ({children}) =>{
    return(
        <>
        <div className="card-basic">
           {children}
        </div>
        </>
    )
}