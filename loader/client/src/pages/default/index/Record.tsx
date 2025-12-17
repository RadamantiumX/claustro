import React from 'react'
import HeroSection from '../../../features/default/index/record/HeroSection'
import FormSection from '../../../features/default/index/record/FormSection'

export default function Record():React.ReactNode {
  return (
    <div className='page-flex'>
      <HeroSection/>
      <FormSection/>
    </div>
  )
}
