import React from "react"
import { PageSubTitle } from "../../../components/headers/PageSubTitle"
import { CustomLink } from "../../../components/buttons/CustomLink"
import { BasicCard } from "../../../components/cards/BasicCard"
import { AuthForm } from "../../../components/forms/AuthForm"
import { useLogin } from "../../../hooks/hooks"
import GuestContent from "../../../components/sectionsTemplate/GuestContent"
import { AuthErrorCard } from "../../../components/cards/AuthErrorCard"

/**
 * Form for Auth Section on Guest Layout
 * @returns {React.ReactNode}
 */
export default function FormSection():React.ReactNode {
  const { handleChange, handleSubmit, formData, responseError } = useLogin()
  return (
    <GuestContent>
      {responseError && <AuthErrorCard message={responseError}/> }
          <BasicCard>
              <PageSubTitle title="Sign In to your account"/>
              <AuthForm
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                authInputs={[
                  {typeInput:"text", propInput:"username", value: formData.username, placeholder:"Username"},
                  {typeInput: "password", propInput:"password",value: formData.password, placeholder: "Password"}
                ]}
                innerTextButton="Sign In"
                />
             <CustomLink inner="Back" route="/" fontSize=""/>
           </BasicCard>
             
    </GuestContent>
  )
}
