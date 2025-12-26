/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchUniqueData} from '../../../../hooks/hooks';

import Cascade from './cascade/Cascade';

// interface Data {
//   id: number,
//   emailSource: string;
//   emailSourcePsw: string;
//   xUser: string;
//   xPsw: string;
// }
// TODO: take the example of FORMSECTION ADD
// TODO: Try with conditionals
export default function UpdateData():React.ReactNode {
  const { data } = useFetchUniqueData()
  console.log(data)
 
    return (
    <DefaultContent>
        {data !== undefined && <div>The Id is:{data.id}</div>}
        {data !== undefined && <Cascade data={data}/>}
    </DefaultContent>
  )

}
