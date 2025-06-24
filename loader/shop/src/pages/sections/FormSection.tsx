import { PageSubTitle } from "../../components/headers/PageSubTitle"
import { Form } from "../../components/forms/Form"
import { CustomLink } from "../../components/buttons/CustomLink"

export default function FormSection() {
  return (
    <section className="flex flex-col items-center h-screen">
            <div className="flex flex-col items-center p-10 gap-y-5 bg-gray-800 rounded-sm shadow-2xl">
              <PageSubTitle title="Sign In to your account"/>
              <Form/>
             <CustomLink inner="Back" route="/" color="gray"/>
            </div>
             
    </section>
  )
}
