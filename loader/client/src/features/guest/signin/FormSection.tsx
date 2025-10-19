import React from "react"
import { PageSubTitle } from "../../../components/headers/PageSubTitle"
import { CustomLink } from "../../../components/buttons/CustomLink"
import { BasicCard } from "../../../components/cards/BasicCard"
import { Form } from "../../../components/forms/Form"
import { useLogin } from "../../../hooks/hooks"
import GuestContent from "../../../components/sectionsTemplate/GuestContent"

/**
 * Form for Auth Section on Guest Layout
 * @returns {React.ReactNode}
 */
export default function FormSection():React.ReactNode {
  const { handleChange, handleSubmit, formData  } = useLogin()
  return (
    <GuestContent>
          <BasicCard>
              <PageSubTitle title="Sign In to your account"/>
              <Form
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                inputs={[{typeInput:"text", propInput:"username", value: formData.username, placeholder:"Username"},{typeInput: "password", propInput:"password",value: formData.password, placeholder: "Password"}]}
                innerTextButton="Sign In"
                />
             <CustomLink inner="Back" route="/" fontSize=""/>
           </BasicCard>
             
    </GuestContent>
  )
}
