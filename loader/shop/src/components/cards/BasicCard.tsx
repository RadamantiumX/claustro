import React from "react"

export const BasicCard:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode =>{
    return(
        <>
        <div className="card-basic">
           {children}
        </div>
        </>
    )
}