import React from "react"

export const PageTitle:React.FC<{title:string}> =({title})=> {
  return (
    <h1 className="font-large">
      {title}
    </h1>
  )
}
