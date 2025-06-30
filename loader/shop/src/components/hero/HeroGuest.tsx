import React from "react"

/**
 * Reused component for hero section on each page.
 * 
 * @param children React Node component go inside.
 * @returns {React.ReactNode}
 */
export const HeroGuest:React.FC<{children:React.ReactNode}> = ({children}):React.ReactNode => {
    return(
        <>
        <header className="hero-center">
          {children}
        </header>
        </>
    )
}