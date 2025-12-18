import React from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { GenericForm } from '../../../components/forms/GenericForm'
import { useAddData } from '../../../hooks/hooks'
import { useFormInputs } from '../../../hooks/useFormInputs'
import { DATA_INPUTS } from '../../../utils/const'

export default function FormSection():React.ReactNode {
  const { formData, handleChange, handleSubmit } = useAddData()
  const { formInputs } = useFormInputs(DATA_INPUTS, formData)

  return (
    <DefaultContent>
          <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Add new'/>
    </DefaultContent>
  )
}
