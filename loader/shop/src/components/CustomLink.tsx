import React, {type ReactNode, type JSX } from "react"
import { Link } from "react-router"



export const CustomLink:React.FC<{children: ReactNode, color:string, route:string}> = ({children, color, route}):JSX.Element => {
  return (
    <Link to={route} className={`rounded-sm bg-${color} px-3 py-1 border-2 font-bold`}>
      {children}
    </Link>
  )
}