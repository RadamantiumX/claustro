import { Link } from "react-router-dom";
import React from 'react'
// import { useDelete } from "../../hooks/useDelete";

export const TableLink:React.FC<{children:React.ReactNode, id:number, target:string, to:string}> = ({children, id, target, to}):React.ReactNode => {
  // const { setId } = useDelete()
  return (
     <>
      <Link onClick={()=>{}}  to={to}>
      {children}
      </Link>
     </>
  )
}
