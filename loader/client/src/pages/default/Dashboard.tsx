import React from "react"
import HeroSection from "../../features/default/dashboard/HeroSection"
import DataSection from "../../features/default/dashboard/DataSection"


export default function Dashboard():React.ReactNode {
 
  

 
  return (
    <div className="page-flex">
      <HeroSection/>
      <DataSection/>
    </div>
  )
}
