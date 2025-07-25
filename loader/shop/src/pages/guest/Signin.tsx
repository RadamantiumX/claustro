import FormSection from "../../features/guest/signin/FormSection"
import HeroSection from "../../features/guest/signin/HeroSection"
import React from "react"

/**
 * Signin page on Guest Layout
 * @returns {React.ReactNode}
 */
export default function Signin():React.ReactNode {
  
  return (
    <div className="page-flex" >
      <HeroSection/>
      <FormSection/>
    </div>
  )
}
