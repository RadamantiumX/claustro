import { HeroGuest } from '../../../components/hero/HeroGuest';
import { PageTitle } from '../../../components/headers/PageTitle';

export default function HeroSection() {
  return (
    <>
      <HeroGuest>
         <PageTitle title="Welcome... This is a Storage Area 📦"/>
      </HeroGuest>
    </>
  )
}
