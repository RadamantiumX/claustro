import { Link } from "react-router-dom";

import React from 'react'

export const TableLink:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
     <>
      <Link to="href">
      {children}
      </Link>
     </>
  )
}
