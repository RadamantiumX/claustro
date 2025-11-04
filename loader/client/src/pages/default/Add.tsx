import React from 'react'
import HeroSection from '../../features/default/add/HeroSection'
import FormSection from '../../features/default/add/FormSection'
import { ConfirmationCard } from '../../components/cards/ConfirmationCard'

export default function Add():React.ReactNode {
  return (
    <div className="page-flex">
      <ConfirmationCard legend='Are you sure?'/>
      <HeroSection/>
      <FormSection/>
    </div>
  )
}
