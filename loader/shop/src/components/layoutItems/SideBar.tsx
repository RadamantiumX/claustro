import React from "react"
import { useStateContext } from "../../hooks/useCtxStates"
import { Close } from "../../icons/Close"

export const SideBar = ():React.ReactNode => {
    const {over, setOver} = useStateContext()
    return(
        <aside onMouseOver={()=>setOver(true)}  className={over?`bg-amber-700 h-1/2 w-40 transition duration-500 translate delay-300 ease-in-out absolute`:'bg-amber-700 h-1/2 w-40 transition duration-500 -translate-x-full delay-300 ease-in-out absolute'}>
          <div className="flex justify-end m-2">
            <button className="cursor-pointer" onClick={()=>setOver(false)}><Close/></button>
          </div>
        </aside>
    )
}