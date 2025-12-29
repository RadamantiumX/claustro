/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchCascade} from '../../../../hooks/hooks';

import DataUpdate from './cascade/DataUpdate';

// interface Data {
//   id: number,
//   emailSource: string;
//   emailSourcePsw: string;
//   xUser: string;
//   xPsw: string;
// }
// TODO: take the example of FORMSECTION ADD
// TODO: Try with conditionals
export default function Update():React.ReactNode {
  const { data } = useFetchCascade()
  console.log(data)
    return (
    <DefaultContent>
      
        {data !== undefined && <DataUpdate data={data}/>}
        
    </DefaultContent>
  )

}
