import React from "react"
import { PageSubTitle } from "../../../components/headers/PageSubTitle"
import { CustomLink } from "../../../components/buttons/CustomLink"
import { BasicCard } from "../../../components/cards/BasicCard"
import { AuthForm } from "../../../components/forms/AuthForm"
import { useLogin, useFormInputs } from "../../../hooks/hooks"
import GuestContent from "../../../components/sectionsTemplate/GuestContent"
import { AuthErrorCard } from "../../../components/cards/AuthErrorCard"
import { SIGNIN_INPUTS } from "../../../utils/const"

/**
 * Form for Auth Section on Guest Layout
 * @returns {React.ReactNode}
 */
export default function FormSection():React.ReactNode {
  const { handleChange, handleSubmit, formData, responseError } = useLogin()
  const { formInputs } = useFormInputs(SIGNIN_INPUTS, formData)
  return (
    <GuestContent>
      { responseError && <AuthErrorCard message={responseError}/> }
          <BasicCard>
              <PageSubTitle title="Sign In to your account"/>
              <AuthForm
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                authInputs={formInputs}
                innerTextButton="Sign In"
                />
             <CustomLink inner="Back" route="/" fontSize=""/>
           </BasicCard>
    </GuestContent>
  )
}
