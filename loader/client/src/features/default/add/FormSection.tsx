import React from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { GenericForm } from '../../../components/forms/GenericForm'
import { useFormInputs } from '../../../hooks/custom/useFormInputs'
import { DATA_INPUTS } from '../../../utils/const'
import { useDecodeToken } from '../../../hooks/custom/useDecode'
import { useMutationHandler } from '../../../hooks/custom/useMutationHandler'
import type { FormDataAddData } from '../../../types'

export default function FormSection():React.ReactNode {
  const { userColabId } = useDecodeToken()
  
  const formValues:FormDataAddData = {
    emailSource: '',
    emailSourcePsw: '',
    xUser: '',
    xPsw: '',
    userColabId: userColabId,
  }
  const { formData, handleChange, handleSubmit } = useMutationHandler(formValues, {route:"data",method:"create"})
  const { formInputs } = useFormInputs(DATA_INPUTS, formData)

  return (
    <DefaultContent>
          <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Add new'/>
    </DefaultContent>
  )
}
