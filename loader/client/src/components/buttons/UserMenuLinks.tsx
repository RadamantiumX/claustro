import { Link } from "react-router-dom"
import React from 'react';
import { useStateContext } from "../../hooks/hooks";

export const UserMenuLinks:React.FC<{children:React.ReactNode}> = ({children}) => {
  const { user } = useStateContext()
  return (
    <Link reloadDocument className="link-hover" to={`/settings/${user}`}>{children}</Link>
  )
}
