import React from "react"


/**
 * Reused component for card simple.
 * 
 * @param children React Node component go inside.
 * @returns {React.ReactNode}
 */
export const BasicCard:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode =>{
    return(
        <>
        <div className="card-basic">
           {children}
        </div>
        </>
    )
}