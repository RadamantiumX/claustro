import React from "react"

type btn = "submit" | "reset" | "button" | undefined

export const CustomButton:React.FC<{inner: string,  typeBtn:btn}> = ({inner, typeBtn})=> {
  return (
    <button type={typeBtn} className={`blue-button`}>
      {inner}
    </button>
  )
}
