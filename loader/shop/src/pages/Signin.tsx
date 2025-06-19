import Form from "../components/Form"
import { CustomLink } from "../components/CustomLink"
import { PageTitle } from "../components/PageTitle"


export default function Signin() {
  
  return (
    <div className="flex flex-col items-center gap-y-5 mt-20">
      <PageTitle title="Authentication Area"/>
      <Form/>
      <CustomLink inner="Back" route="/" color="gray"/>
       
    </div>
  )
}
