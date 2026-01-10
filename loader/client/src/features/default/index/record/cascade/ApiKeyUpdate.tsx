import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { FUL_DATA_INPUTS } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'

const apikeyFields = {
    
    apiKey: "",
    apiKeySecret: "",
    bearerToken: "",
    accessToken: "",
    accessTokenSecret: "",
    apiDataId: "",
    dataId: ""
}

// TODO:Try this to work
export default function ApiKeyUpdate(apiKey:any):React.ReactNode {
     console.log(apiKey)
     const { handleChange, handleSubmit, formData } = useMutationHandler(apiKey, {route:"data",method:"update"})
     const { formInputs } = useFormInputs(FUL_DATA_INPUTS, formData)
  return (
    <>
    
    <PageSubTitle title='Data Update'/>
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton='Update Data'/>
     
    </>
  )
}
