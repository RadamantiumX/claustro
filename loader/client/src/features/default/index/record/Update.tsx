/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchCascade} from '../../../../hooks/hooks';
import DataUpdate from './cascade/DataUpdate';


export default function Update():React.ReactNode {
  const { data, apiData, apiKeys } = useFetchCascade()
  console.log(data && data.id)
  //console.log(apiData)
  // console.log(apiKeys)
    return (
    <DefaultContent>
      
        {data && <DataUpdate data={data}/>}
        
    </DefaultContent>
  )

}
