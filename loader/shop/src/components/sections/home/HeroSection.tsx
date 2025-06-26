import { HeroGuest } from "../../hero/HeroGuest"
import { PageTitle } from '../../headers/PageTitle';

export default function HeroSection() {
  return (
    <>
      <HeroGuest>
         <PageTitle title="Welcome... This is Storage Area"/>
      </HeroGuest>
    </>
  )
}
