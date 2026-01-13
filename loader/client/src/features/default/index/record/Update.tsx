/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchCascade} from '../../../../hooks/hooks';
import DataUpdate from './cascade/DataUpdate';
import ApiDataUpdate from './cascade/ApiDataUpdate';
import ApiKeyUpdate from './cascade/ApiKeyUpdate';

export default function Update():React.ReactNode {
  const { data, apiData, apiKeys, id } = useFetchCascade()
 
  
    return (
    <DefaultContent>
      
        { data && <DataUpdate data={data}/> }
        { data && <ApiDataUpdate apiData={apiData} dataId={parseInt(id as string)}/> }
        { apiData && <ApiKeyUpdate apiKeys={apiKeys} dataId={parseInt(id as string)} apiDataId={apiData.id}/> }
    </DefaultContent>
  )

}
