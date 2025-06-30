import React from "react"
import type { btnProps } from '../../types/components';

/**
 * This is a reused comp to use anywere on the project
 * @component
 * @param btnProps.inner - Inside button text
 * @param btnProps.typeBtn - Type of button property
 * @param btnProps.fontSize - Font size for the button inside text
 * @returns {React.ReactNode} - 
 */
export const CustomButton:React.FC<btnProps> = ({inner, typeBtn, fontSize}):React.ReactNode=> {
  return (
    <button type={typeBtn} className={`blue-button ${fontSize}`}>
      {inner} {/* Button inside text */}
    </button>
  )
}
