import React from 'react'
import { HeroDefault } from '../../../components/hero/HeroDefault'
import { PageTitle } from '../../../components/headers/PageTitle'

export const HeroSection = ():React.ReactNode => {
  return (
    <>
      <HeroDefault>
        <PageTitle title='Settings'/>
      </HeroDefault>
    </>
  )
}
