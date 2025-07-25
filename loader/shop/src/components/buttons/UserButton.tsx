import React from "react"
import type { NavBarBtnProp } from "../../types/components"
import { Chevron } from "../../icons/icons"
import { useUserMenu } from "../../hooks/hooks"


/**
 * Component to reuse on Navbar only
 * @param NavBarBtnProp.route --> Route to redirect after event
 * @param NavBarBtnProp.inner --> Button inside text
 * @returns { React.ReactNode }
 */
export const UserButton:React.FC<NavBarBtnProp> = ({inner}):React.ReactNode =>{
    const {rotate, handleClick} = useUserMenu()
    return(
        <>
         <button onClick={handleClick} className="flex flex-row cursor-pointer uppercase font-bold hover:underline" >{inner} <Chevron rotate={rotate}/></button>
        </>
    )
}