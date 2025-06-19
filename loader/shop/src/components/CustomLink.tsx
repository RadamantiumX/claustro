import React, { type JSX } from "react"
import { Link } from "react-router"



export const CustomLink:React.FC<{inner: string, route:string, color:string}> = ({inner, route, color}):JSX.Element => {
  return (
    <Link to={route} className={`rounded-sm bg-${color}-400 px-3 py-1 border-2 font-bold`}>
      {inner}
    </Link>
  )
}