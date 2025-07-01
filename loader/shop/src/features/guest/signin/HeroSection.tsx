import React from "react"
import { PageTitle } from "../../../components/headers/PageTitle"
import { HeroGuest } from "../../../components/hero/HeroGuest"

/**
 * Hero Section on Guest Layout
 * @returns {React.ReactNode}
 */
export default function HeroSection():React.ReactNode {
  return (
    <HeroGuest>
      <PageTitle title="Free Store Data"/>
    </HeroGuest>
  )
}
