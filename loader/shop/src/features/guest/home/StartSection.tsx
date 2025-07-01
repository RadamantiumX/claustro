import GuestContent from "../../../components/sectionsTemplate/GuestContent"
import { CustomLink } from "../../../components/buttons/CustomLink"
import React from "react"

/**
 * Start section for Home Guest Layout, route: "/home"
 * @returns {React.ReactNode}
 */
export default function StartSection():React.ReactNode {
  return (
    <GuestContent>
      <CustomLink inner="Get Started" route="/signin" fontSize="text-3xl"/>
    </GuestContent>
  )
}
