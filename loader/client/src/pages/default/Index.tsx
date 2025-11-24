
import React,{ useEffect, useState } from "react"
import HeroSection from "../../features/default/index/HeroSection"
import TableSection from "../../features/default/index/TableSection"
import { useLocation, useNavigate } from "react-router-dom"
/**
 * Index page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Index():React.ReactNode {
 const [ typeNav, setTypeNav ]:any = useState()
 const location = useLocation()
 const navigate = useNavigate()
 const entries = performance.getEntriesByType("navigation")[0]
 console.log(entries.type)
  useEffect(()=>{
  // setTypeNav(entries.type)  
  // if(typeNav ===  'reload'){
  //   navigate(location.pathname, {replace:true})
   
  // }  
  
  },[location.search, location.pathname, navigate])
  return (
    <div onReset={()=>{navigate(location.pathname, {replace:true})}} className="page-flex">
      <HeroSection/>
      <TableSection/>
    </div>
  )
}
