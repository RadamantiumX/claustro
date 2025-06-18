import Form from "../components/Form"
import { CustomLink } from "../components/CustomLink"


export default function Signin() {
  
  return (
    <div className="flex flex-col items-center gap-y-5">
      <Form/>
      <CustomLink route="/" color="red-400">
         Back
      </CustomLink>
    </div>
  )
}
