import React,{type ReactNode} from "react"

/**
 * Component sections, used only in the defualt pages
 * @component
 * @param children React Node component go inside.
 * @returns {React.ReactNode}
 */
const DefaultContent:React.FC<{children:ReactNode}> = ({children}):React.ReactNode =>{
   
return(
    <>
     <section className="content-flex-column">
      {children}
     </section>
    </>
)
}

export default DefaultContent