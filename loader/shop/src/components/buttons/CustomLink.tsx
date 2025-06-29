import React from "react"
import { Link } from "react-router-dom"
import type { linkProps } from "../../types/components"




export const CustomLink:React.FC<linkProps> = ({inner, route, fontSize}):React.ReactNode => {
  return (
    <Link to={route} className={`purple-link ${fontSize}`}>
      {inner}
    </Link>
  )
}