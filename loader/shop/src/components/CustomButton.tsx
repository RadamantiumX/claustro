import React, {type ReactNode, type JSX } from "react"

type btn = "submit" | "reset" | "button" | undefined

export const CustomButton:React.FC<{children: ReactNode, color:string, typeBtn:btn}> = ({children, color, typeBtn}):JSX.Element => {
  return (
    <button type={typeBtn} className={`rounded-sm bg-${color}-400 px-3 py-1 border-2 font-bold`}>
      {children}
    </button>
  )
}
