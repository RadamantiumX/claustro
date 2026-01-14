import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { APIDATA_INPUTS_UPDATE, APIDATA_INPUTS } from '../../../../../utils/const';
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'
import type { ApiDataProps } from '../../../../../types'

export default function ApiDataUpdate({apiData, dataId}:ApiDataProps):React.ReactNode {
  
    const { handleChange, handleSubmit, formData } = useMutationHandler(apiData ? apiData :{ dataId:dataId ,appName:"", appId:"",  }, apiData?{route:"apiData",method:"update"}:
      {route:"apiData",method:"create"}
    )
     const { formInputs } = useFormInputs(apiData ? APIDATA_INPUTS_UPDATE : APIDATA_INPUTS, formData)
    
  return (
    <>
    
    <PageSubTitle title={apiData ? 'Api Data Update':'Api Data'}/>
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton={apiData ? 'Update Api Data': "Add Api Data"}/>
     
    </>
  )
}
