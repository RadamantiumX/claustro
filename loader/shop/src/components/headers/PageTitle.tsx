import React from "react"

export const PageTitle:React.FC<{title:string}> =({title})=> {
  return (
    <h1 className="font-bold text-2xl">
      {title}
    </h1>
  )
}
