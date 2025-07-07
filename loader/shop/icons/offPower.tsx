import React from "react"
import { useStateContext } from "../src/hooks/useCtxStates"

export const OffPower = ():React.ReactNode => {
    const { bounce } = useStateContext()
    return(
        <>
         <svg   xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className={`icon icon-tabler icons-tabler-outline icon-tabler-power ${bounce ? 'animate-bounce': ''}`}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6a7.75 7.75 0 1 0 10 0" /><path d="M12 4l0 8" /></svg>
        </>
    )
}