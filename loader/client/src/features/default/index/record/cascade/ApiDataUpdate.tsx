import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { FUL_DATA_INPUTS } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'
import type { DataSelectForIdOutput } from '../../../../../types'

export default function ApiDataUpdate(data:DataSelectForIdOutput):React.ReactNode {
     const { handleChange, handleSubmit, formData } = useMutationHandler(data.data, {route:"data",method:"update"})
     const { formInputs } = useFormInputs(FUL_DATA_INPUTS, formData)
  return (
    <>
    
    <PageSubTitle title='Data Update'/>
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Data'/>
     
    </>
  )
}
