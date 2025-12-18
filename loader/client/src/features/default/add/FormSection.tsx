import React from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { GenericForm } from '../../../components/forms/GenericForm'
import { useAddData } from '../../../hooks/hooks'
import { useFormInputs } from '../../../hooks/useFormInputs'
import { DATA_INPUTS } from '../../../utils/const'

export default function FormSection():React.ReactNode {
  const { formData, handleChange, handleSubmit } = useAddData()
  const { formInputs } = useFormInputs(DATA_INPUTS, formData)
  const inputs = [
  {
    for: "email-source",
    label: "Email Source",
    typeInput: "email",
    propInput: "emailSource",
    placeholder: "user@mail.com",
    value: formData.emailSource
  },
  {
    for: "email-password",
    label: "Email Password",
    typeInput: "text",
    propInput: "emailSourcePsw",
    placeholder: "Insert Email Password",
    value: formData.emailSourcePsw
  },
  {
    for: "x-username",
    label: "X Username",
    typeInput: "text",
    propInput: "xUser",
    placeholder: "xusername",
    value: formData.xUser
  },
  {
    for: "x-password",
    label: "X Password",
    typeInput: "text",
    propInput: "xPsw",
    placeholder: "Insert X Username Password",
    value: formData.xPsw
  },
]
  return (
    <DefaultContent>
          <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Add new'/>
    </DefaultContent>
  )
}
