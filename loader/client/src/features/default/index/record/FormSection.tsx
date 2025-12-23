/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchUniqueData, useFormInputs } from '../../../../hooks/hooks';
import { GenericForm } from '../../../../components/forms/GenericForm';
import { useModifyData } from '../../../../hooks/useModifyData';
import { DATA_INPUTS } from '../../../../utils/const';

// TODO: take the example of FORMSECTION ADD
export default function FormSection():React.ReactNode {
  const { data }:any = useFetchUniqueData()
  const { handleChange, handleSubmit, formData } = useModifyData(data)
  const { formInputs } = useFormInputs(DATA_INPUTS, formData)

  return (
    <DefaultContent>
        <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update record'/>
    </DefaultContent>
  )
}
