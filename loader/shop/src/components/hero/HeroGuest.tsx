import React from "react"

export const HeroGuest:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode => {
    return(
        <>
        <header className="hero-center">
          {children}
        </header>
        </>
    )
}