import React from 'react';
import { Link } from 'react-router-dom';

export const SideMenuLinks:React.FC<{children:React.ReactNode}> = ({children}) => {
    return(
        <>
        <Link className="link-underline" to="#">{children}</Link>
        </>
    )
}