import React from "react"

type btn = "submit" | "reset" | "button" | undefined

export const CustomButton:React.FC<{inner: string,  typeBtn:btn, fontSize:string}> = ({inner, typeBtn, fontSize})=> {
  return (
    <button type={typeBtn} className={`blue-button ${fontSize}`}>
      {inner}
    </button>
  )
}
