import React, { type JSX } from "react"
import { Link } from "react-router-dom"



export const CustomLink:React.FC<{inner: string, route:string}> = ({inner, route}):JSX.Element => {
  return (
    <Link to={route} className={`rounded-sm bg-purple-400 px-3 py-1 border-2 font-bold`}>
      {inner}
    </Link>
  )
}