
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
  setTypeNav(entries.type)  
  if(typeNav ===  'reload'){
    navigate(location.pathname, {replace:true})
    setTypeNav()
  }  
   
  },[location.search, location.pathname, navigate])
  return (
    <div className="page-flex">
      <HeroSection/>
      <TableSection/>
    </div>
  )
}
