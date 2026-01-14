import React from 'react'
import { GenericForm } from '../../../../../components/forms/GenericForm'
import { useFormInputs } from '../../../../../hooks/hooks'
import { useMutationHandler } from '../../../../../hooks/custom/useMutationHandler'
import { APIKEYS_INPUTS, APIKEYS_INPUTS_UPDATE } from '../../../../../utils/const'
import { PageSubTitle } from '../../../../../components/headers/PageSubTitle'
import type { ApiKeyProps } from '../../../../../types'

// const apikeyFields = {
    
//     apiKey: "",
//     apiKeySecret: "",
//     bearerToken: "",
//     accessToken: "",
//     accessTokenSecret: "",
//     apiDataId: "",
//     dataId: ""
// }

// TODO:Try this to work
export default function ApiKeyUpdate({apiKeys, dataId, apiDataId}:ApiKeyProps):React.ReactNode {
     // TODO: fix this and finish
     const { handleChange, handleSubmit, formData } = useMutationHandler(apiKeys ? apiKeys : 
      {apiKey: "", apiKeySecret: "", bearerToken: "", accessToken: "", accessTokenSecret: "", apiDataId: apiDataId, dataId: dataId}, 
        apiKeys ?{route:"apiKey",method:"update"}:{route:"apiKey",method:"create"})
     const { formInputs } = useFormInputs(apiKeys ? APIKEYS_INPUTS_UPDATE : APIKEYS_INPUTS, formData)
  return (
    <>
    
    <PageSubTitle title={apiKeys ?'Api Key Update': "Api Key"}/>
     <GenericForm handleChange={handleChange} handleSubmit={handleSubmit} dataInputs={formInputs} innerTextButton={apiKeys?'Update Api Key':'Add Api key'}/>

    </>
  )
}
