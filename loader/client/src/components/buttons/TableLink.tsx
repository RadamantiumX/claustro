import { Link } from "react-router-dom";

import React from 'react'

export const TableLink:React.FC<{children:React.ReactNode, to:string}> = ({children, to}) => {
  return (
     <>
      <Link to={to}>
      {children}
      </Link>
     </>
  )
}
