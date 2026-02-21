import { useState, useEffect } from "react"

export const useFormatDate = (date:Date) => {
   const [strDate, setStrDate] = useState<string>()
   const altDate = new Date(date)
   
   useEffect(()=>{
    setStrDate(altDate.toDateString())
   },[strDate])

   return { strDate }
}