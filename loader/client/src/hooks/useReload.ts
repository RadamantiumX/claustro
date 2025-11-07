import { useEffect, useState } from "react"

export const useReload = () => {
    const [ reload, setReload ] = useState(false)
     useEffect(()=>{
        window.addEventListener("beforeunload", ()=>{
           window.confirm('Are you sure?')
        })
        return  window.addEventListener("beforeunload", ()=>{
          console.log('reload page')
          console.log(reload)
          setReload(true)
        })
    },[reload])

    
}