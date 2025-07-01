import HeroSection from "../../features/guest/home/HeroSection"
import StartSection from "../../features/guest/home/StartSection"
import React from "react"

/**
 * Home page on Guest Layout
 * @returns {React.ReactNode}
 */
 export default function  Home ():React.ReactNode {
  return (
    <>
     
    <main className="main-layout">
      <HeroSection/>
      <StartSection/>
    </main>
    
    </>
  )
}

