import { HeroDefault } from "../../../components/hero/HeroDefault"
import { PageTitle } from "../../../components/headers/PageTitle"
import { SearchInput } from "../../../components/headers/SearchInput"

export default function HeroSection() {
  return (
    <>
     <HeroDefault>
       <PageTitle title="Accounts Data"/>
      <SearchInput/>
     </HeroDefault>
    </>
  )
}
