import React from 'react';
import type { DataProps } from '../../../../../types';
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { DATA_INPUTS_UPDATE } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'




export default function DataUpdate({data}:DataProps):React.ReactNode {
     const { handleChange, handleSubmit, formData } = useMutationHandler(data, {route:"data",method:"update"})
     const { formInputs } = useFormInputs(DATA_INPUTS_UPDATE, formData)
     
  return (
    <>
    
      <PageSubTitle title='Data Update'/>
      <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Data'/>
     
    </>
  )
}
