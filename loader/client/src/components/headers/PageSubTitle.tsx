import React from "react"

/**
 * Reused component to use in header sub-title on this project
 * 
 * @component
 * @param title --> Text to fill inside the tag
 * @returns {React.ReactNode}
 */
export const PageSubTitle:React.FC<{title:string}> =({title}):React.ReactNode=> {
  return (
    <h2 className="font-bold text-2xl">
      {title}
    </h2>
  )
}