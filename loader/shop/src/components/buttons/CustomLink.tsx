import React, { type JSX } from "react"
import { Link } from "react-router-dom"



export const CustomLink:React.FC<{inner: string, route:string, fontSize:string}> = ({inner, route, fontSize}):JSX.Element => {
  return (
    <Link to={route} className={`purple-link ${fontSize}`}>
      {inner}
    </Link>
  )
}