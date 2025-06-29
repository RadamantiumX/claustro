import React,{type ReactNode} from "react"

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