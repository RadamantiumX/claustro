import React from "react"
import { Link } from "react-router-dom"

export const NavButton:React.FC<{route:string, inner:string}> = ({route, inner}):React.ReactNode =>{
    return(
        <>
         <Link to={route}>{inner}</Link>
        </>
    )
}