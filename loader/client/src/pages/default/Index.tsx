
import React from "react"
import HeroSection from "../../features/default/index/HeroSection"
import TableSection from "../../features/default/index/TableSection"
import { useSetParams } from "../../hooks/hooks"
/**
 * Index page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Index():React.ReactNode {
  useSetParams()
  return (
    <div className="page-flex">
      <HeroSection/>
      <TableSection/>
    </div>
  )
}
