import React from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { GenericForm } from '../../../components/forms/GenericForm'
// import { useAddData } from '../../../hooks/hooks'
import { useFormInputs } from '../../../hooks/custom/useFormInputs'
import { DATA_INPUTS } from '../../../utils/const'
import { useDecodeToken } from '../../../hooks/custom/useDecode'
import { useMutationHandler } from '../../../hooks/custom/useMutationHandler'

export default function FormSection():React.ReactNode {
  const { id } = useDecodeToken()
  const { formData, handleChange, handleSubmit } = useMutationHandler({ emailSource:'',
        emailSourcePsw: '',
        xUser:'',
        xPsw:'',
        userColabId: id}, {route:"data",method:"create"})
  const { formInputs } = useFormInputs(DATA_INPUTS, formData)

  return (
    <DefaultContent>
          <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Add new'/>
    </DefaultContent>
  )
}
