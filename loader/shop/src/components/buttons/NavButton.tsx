import React from "react"
import { Link } from "react-router-dom"

export const NavButton:React.FC<{route:string, inner:string}> = ({route, inner}) =>{
    return(
        <>
         <Link to={route}>{inner}</Link>
        </>
    )
}