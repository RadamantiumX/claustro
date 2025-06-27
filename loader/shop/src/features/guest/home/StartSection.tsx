import GuestContent from "../../../components/sectionsTemplate/GuestContent"
import { CustomLink } from "../../../components/buttons/CustomLink"

export default function StartSection() {
  return (
    <GuestContent>
      <CustomLink inner="Get Started" route="/signin"/>
    </GuestContent>
  )
}
