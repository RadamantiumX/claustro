import React from "react"
import HeroSection from "../../features/default/dashboard/HeroSection"
import DataSection from "../../features/default/dashboard/DataSection"
// import { useEffect, useState, useMemo } from "react"
// import { useSearchParams } from "react-router-dom"

/**
 * Dashboard page on Default Layout
 * @returns {React.ReactNode}
 */
// type ParamTuple = [string, string]

export default function Dashboard():React.ReactNode {
 
  // const cluster:ParamTuple = ["cluster", "rival"]
  // const lan:ParamTuple = ["lan","local"]
  
  // const [ searchParams, setSearchParams ] = useSearchParams()
  // const [ arrayParams, setArrayParams ] = useState<ParamTuple[]>([])

  // useMemo(()=>{
  //    setArrayParams([...arrayParams,cluster,lan])
  // },[])

   
  //  useEffect(()=>{
    
  //   setSearchParams(arrayParams)

     

  //  },[arrayParams, searchParams]) 

 
  return (
    <div className="page-flex">
      <HeroSection/>
      <DataSection/>
    </div>
  )
}
