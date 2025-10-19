import React from "react"

/**
 * Reused component to use in header sub-title on this project
 * 
 * @component
 * @param title --> Text to fill inside the tag
 * @returns {React.ReactNode}
 */
export const PageTitle:React.FC<{title:string}> =({title}):React.ReactNode=> {
  return (
    <h1 className="font-large">
      {title}
    </h1>
  )
}
