import React from 'react'
import { HeroSection } from '../../../features/default/user/HeroSection'
import { Update } from '../../../features/default/user/Update'

export default function UserSettings():React.ReactNode {
  return (

  <>
  <div className='page-flex'>
    <HeroSection/>
    <Update/>
  </div>
    
  </>
  )
}
