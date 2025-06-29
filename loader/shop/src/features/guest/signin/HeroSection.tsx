import React from "react"
import { PageTitle } from "../../../components/headers/PageTitle"
import { HeroGuest } from "../../../components/hero/HeroGuest"

export default function HeroSection():React.ReactNode {
  return (
    <HeroGuest>
      <PageTitle title="Free Store Data"/>
    </HeroGuest>
  )
}
