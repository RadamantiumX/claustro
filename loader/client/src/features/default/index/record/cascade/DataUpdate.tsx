import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { FUL_DATA_INPUTS } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'


interface DataProps {
 data:{
  id:number;
  emailSource:string;
  emailSourcePsw:string;
  xUser:string;
  xPsw:string
 } 
}

export default function DataUpdate({data}:DataProps):React.ReactNode {
     const { handleChange, handleSubmit, formData } = useMutationHandler(data, {route:"data",method:"update"})
     const { formInputs } = useFormInputs(FUL_DATA_INPUTS, formData)
     
  return (
    <>
    
      <PageSubTitle title='Data Update'/>
      <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Data'/>
     
    </>
  )
}
