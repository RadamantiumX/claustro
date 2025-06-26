import React from "react"

export const HeroGuest:React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <>
        <header className="flex h-40 items-center">
          {children}
        </header>
        </>
    )
}