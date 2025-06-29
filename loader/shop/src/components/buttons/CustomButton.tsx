import React from "react"
import type { btnProps } from '../../types/components';


export const CustomButton:React.FC<btnProps> = ({inner, typeBtn, fontSize}):React.ReactNode=> {
  return (
    <button type={typeBtn} className={`blue-button ${fontSize}`}>
      {inner}
    </button>
  )
}
