
import React from "react"
import HeroSection from "../../features/default/index/HeroSection"
import TableSection from "../../features/default/index/TableSection"

/**
 * Index page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Index():React.ReactNode {

  
  return (
    <div className="main-layout">
      <HeroSection/>
      <TableSection/>
    </div>
  )
}
