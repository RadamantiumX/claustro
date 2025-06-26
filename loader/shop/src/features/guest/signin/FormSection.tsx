import { PageSubTitle } from "../../../components/headers/PageSubTitle"
import { CustomLink } from "../../../components/buttons/CustomLink"
import { BasicCard } from "../../../components/cards/BasicCard"
import { Form } from "../../../components/forms/Form"
import { useLogin } from "../../../hooks/useLogin"
import Guest from "../../../components/sectionsTemplate/GuestContent"


export default function FormSection() {
  const { handleChange, handleSubmit, formData  } = useLogin()
  return (
    <Guest>
          <BasicCard>
              <PageSubTitle title="Sign In to your account"/>
              <Form
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                inputs={[{typeInput:"text", propInput:"username", value: formData.username, placeholder:"Username"},{typeInput: "password", propInput:"password",value: formData.password, placeholder: "Password"}]}
                />
             <CustomLink inner="Back" route="/" color="gray"/>
           </BasicCard>
             
    </Guest>
  )
}
