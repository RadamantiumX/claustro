import React from "react"

/**
 * Only layout component footer, shared on default and guest
 * 
 * @component
 * @returns {React.ReactNode}
 */
export const Footer = ():React.ReactNode =>{
    return(
        <>
        <footer>
            <div className="flex flex-col items-center">
                <p className="text-gray-300">Design by <span className="font-bold italic">Radamantium</span> | 2025</p>
            </div>
        </footer>
        </>
    )
}   