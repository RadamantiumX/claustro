import React from "react"

type btn = "submit" | "reset" | "button" | undefined

export const CustomButton:React.FC<{inner: string,  typeBtn:btn}> = ({inner, typeBtn})=> {
  return (
    <button type={typeBtn} className={`rounded-sm bg-blue-400 px-3 py-1 border-2 font-bold cursor-pointer`}>
      {inner}
    </button>
  )
}
