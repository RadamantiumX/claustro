/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchUniqueData} from '../../../../hooks/hooks';

import Cascade from './cascade/Cascade';

// TODO: take the example of FORMSECTION ADD
// TODO: Try with conditionals
export default function UpdateData():React.ReactNode {
  const { data }:any = useFetchUniqueData()
  
  
    return (
    <DefaultContent>
      
        {data !== undefined && <Cascade data={data}/>}
    </DefaultContent>
  )

}
