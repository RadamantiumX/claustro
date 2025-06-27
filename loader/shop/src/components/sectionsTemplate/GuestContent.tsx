import React,{type ReactNode} from "react"

const GuestContent:React.FC<{children:ReactNode}> = ({children}) =>{
return(
    <>
     <section className="screen-content">
      {children}
     </section>
    </>
)
}

export default GuestContent