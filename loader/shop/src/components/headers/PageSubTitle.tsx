import React from "react"

export const PageSubTitle:React.FC<{title:string}> =({title})=> {
  return (
    <h2 className="font-bold text-2xl">
      {title}
    </h2>
  )
}