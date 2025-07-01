import { HeroGuest } from '../../../components/hero/HeroGuest';
import { PageTitle } from '../../../components/headers/PageTitle';
import React from 'react';

/**
 * Hero section for Home Guest Layout, route: "/home"
 * @returns {React.ReactNode}
 */
export default function HeroSection():React.ReactNode {
  return (
    <>
      <HeroGuest>
         <PageTitle title="Welcome... This is a Storage Area 📦"/>
      </HeroGuest>
    </>
  )
}
