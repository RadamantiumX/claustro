import { Link } from "react-router-dom";
import React from 'react'
import { useDelete } from "../../hooks/useDelete";

export const TableLink:React.FC<{children:React.ReactNode, id:number, target:string, to:string}> = ({children, id, target, to}):React.ReactNode => {
  const { handleDelete } = useDelete()
  return (
     <>
      <Link onClick={target === 'delete'? ()=>handleDelete(id):()=>{}}  to={to}>
      {children}
      </Link>
     </>
  )
}
