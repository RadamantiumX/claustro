import React from 'react'
import HeroSection from '../../features/default/add/HeroSection'
import FormSection from '../../features/default/add/FormSection'


export default function Add():React.ReactNode {
  return (
    <div className="page-flex">
      <HeroSection/>
      <FormSection/>
    </div>
  )
}
