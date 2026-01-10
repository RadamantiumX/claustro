/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchCascade} from '../../../../hooks/hooks';

import DataUpdate from './cascade/DataUpdate';


export default function Update():React.ReactNode {
  const { data, apiData, apiKeys } = useFetchCascade()
  console.log(data)
  console.log(apiData)
  console.log(apiKeys)
    return (
    <DefaultContent>
      
        {/* Empty Object validation */Object.keys(data).length !== 0 && <DataUpdate data={data}/>}
        
    </DefaultContent>
  )

}
