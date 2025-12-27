/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useModifyData } from '../../../../../hooks/custom/useModifyData'
import { DATA_INPUTS } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'
// interface Data {
//   id: number,
//   emailSource: string;
//   emailSourcePsw: string;
//   xUser: string;
//   xPsw: string;
// }
export default function DataUpdate(data:any):React.ReactNode {
     const { handleChange, handleSubmit, formData } = useModifyData(data)
     const { formInputs } = useFormInputs(DATA_INPUTS, formData)
  return (
    <>
    
    <PageSubTitle title='Data Update'/>
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Data'/>
     
    </>
  )
}
