import React from "react"
import { Link } from "react-router-dom"
import type { NavBarBtnProp } from "../../types/components"

/**
 * Component to reuse on Navbar only
 * @param NavBarBtnProp.route --> Route to redirect after event
 * @param NavBarBtnProp.inner --> Button inside text
 * @returns { React.ReactNode }
 */
export const NavButton:React.FC<NavBarBtnProp> = ({route, inner}):React.ReactNode =>{
    return(
        <>
         <Link className="uppercase font-bold" to={route}>{inner}</Link>
        </>
    )
}