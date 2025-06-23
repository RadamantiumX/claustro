import {Form} from "../components/Form"
import { CustomLink } from "../components/buttons/CustomLink"
import { PageTitle } from "../components/PageTitle"


export default function Signin() {
  
  return (
    <main className="flex flex-col items-center gap-y-5 mt-20 h-screen">
      <div className="flex flex-col items-center p-10 gap-y-5 bg-gray-800 rounded-sm">
         <PageTitle title="Authentication Area"/>
         <Form/>
        <CustomLink inner="Back" route="/" color="gray"/>
      </div>
    </main>
  )
}
