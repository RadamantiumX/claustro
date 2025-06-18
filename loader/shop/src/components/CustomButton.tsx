import type { ReactNode } from "react"

type typeBtn = "submit" | "reset" | "button" | undefined

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomButton({children}:ReactNode, color:string, typeBtn:typeBtn) {
  return (
    <button type={typeBtn} className={`rounded-sm bg-${color}-400 px-3 py-1 border-2 font-bold`}>
      {children}
    </button>
  )
}
