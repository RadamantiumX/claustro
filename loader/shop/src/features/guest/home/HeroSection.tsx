import { HeroGuest } from '../../../components/hero/HeroGuest';
import { PageTitle } from '../../../components/headers/PageTitle';
import React from 'react';

export default function HeroSection():React.ReactNode {
  return (
    <>
      <HeroGuest>
         <PageTitle title="Welcome... This is a Storage Area 📦"/>
      </HeroGuest>
    </>
  )
}
