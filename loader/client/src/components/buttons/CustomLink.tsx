import React from "react"
import { Link } from "react-router-dom"
import type { linkProps } from "../../types/components"


/**
 * Link Component for reuse anywere on this projects
 * 
 * @param linkProp.inner Inner text for the Link (Descriptive)
 * @param linkProp.route Route located on existing router
 * @param linkProp.fontSize Font size for the Link inside text
 * @returns {React.ReactNode }
 */
export const CustomLink:React.FC<linkProps> = ({inner, route, fontSize}):React.ReactNode => {

  return (
    <Link to={route} className={`purple-link ${fontSize}`}>
      {inner} {/* Button inside text */}
    </Link>
  )
}