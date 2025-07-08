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
     <section className="flex flex-col items-center gap-y-5 mt-20 h-screen">
      {children}
     </section>
    </>
)
}

export default DefaultContent