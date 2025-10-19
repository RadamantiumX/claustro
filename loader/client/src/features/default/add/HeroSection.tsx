import React from 'react'
import { HeroDefault } from '../../../components/hero/HeroDefault'
import { PageTitle } from '../../../components/headers/PageTitle'

export default function HeroSection():React.ReactNode {
  return (
    <HeroDefault>
      <PageTitle title='Adding new Record'/>
    </HeroDefault>
    
  )
}
