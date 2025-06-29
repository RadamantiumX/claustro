import React from "react"

export const PageTitle:React.FC<{title:string}> =({title}):React.ReactNode=> {
  return (
    <h1 className="font-large">
      {title}
    </h1>
  )
}
