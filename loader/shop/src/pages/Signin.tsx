import Form from "../components/Form"
import { Link } from "react-router"


export default function Signin() {
  
  return (
    <div className="flex flex-col items-center gap-y-5">
      <Form/>
      <Link className="" to="/">Back</Link>
    </div>
  )
}
