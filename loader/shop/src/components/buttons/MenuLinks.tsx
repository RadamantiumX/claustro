import { Link } from "react-router-dom"
import React from 'react';

export const MenuLinks:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <Link className="link-hover" to="#">{children}</Link>
  )
}
