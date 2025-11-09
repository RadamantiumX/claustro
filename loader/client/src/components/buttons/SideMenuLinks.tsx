import React from 'react';
import { Link } from 'react-router-dom';

export const SideMenuLinks:React.FC<{children:React.ReactNode, path:string}> = ({children, path}) => {
    
    return(
        <>
        <Link reloadDocument className="link-underline" to={path}>{children}</Link>
        </>
    )
}