import React from "react"
import HeroSection from "../../features/default/dashboard/HeroSection"
import DataSection from "../../features/default/dashboard/DataSection"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
/**
 * Dashboard page on Default Layout
 * @returns {React.ReactNode}
 */
export default function Dashboard():React.ReactNode {
  const [ searchParams, setSearchParams ] = useSearchParams()
  useEffect(()=>{
    setSearchParams({ some:["lipsum", "dolor"] })
  },[])
  return (
    <div className="page-flex">
      <HeroSection/>
      <DataSection/>
    </div>
  )
}
