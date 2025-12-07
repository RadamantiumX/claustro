import React from "react"
import HeroSection from "../../features/default/dashboard/HeroSection"
import DataSection from "../../features/default/dashboard/DataSection"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

/**
 * Dashboard page on Default Layout
 * @returns {React.ReactNode}
 */
type ParamTuple = [string, string]

export default function Dashboard():React.ReactNode {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ arrayParams, setArrayParams ] = useState<ParamTuple[]>([])
  const cluster:ParamTuple = ["cluster", "rival"]
  const lan:ParamTuple = ["lan","local"]

  useEffect(()=>{
    setArrayParams([...arrayParams,cluster,lan])
    
  },[])
  setSearchParams([...searchParams, cluster, lan])
  return (
    <div className="page-flex">
      <HeroSection/>
      <DataSection/>
    </div>
  )
}
