import React from "react"
import HeroSection from "../../features/default/dashboard/HeroSection"
import DataSection from "../../features/default/dashboard/DataSection"
/**
 * Dashboard page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Dashboard():React.ReactNode {
 
  return (
    <div className="page-flex">
      <HeroSection/>
      <DataSection/>
    </div>
  )
}
