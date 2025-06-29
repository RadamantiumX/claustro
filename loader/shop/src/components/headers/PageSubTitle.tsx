import React from "react"

export const PageSubTitle:React.FC<{title:string}> =({title}):React.ReactNode=> {
  return (
    <h2 className="font-bold text-2xl">
      {title}
    </h2>
  )
}