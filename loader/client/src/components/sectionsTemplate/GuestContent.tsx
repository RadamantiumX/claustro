import React,{type ReactNode} from "react"

/**
 * Component sections, used only in the guest pages
 * @component
 * @param children React Node component go inside.
 * @returns {React.ReactNode}
 */
const GuestContent:React.FC<{children:ReactNode}> = ({children}):React.ReactNode =>{
return(
    <>
     <section className="screen-content">
      {children}
     </section>
    </>
)
}

export default GuestContent