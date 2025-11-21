/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableLink } from '../buttons/TableLink'
import { Trash, Eye, Edit } from '../../icons/icons';
import { tableColumns } from './const';
import { useFetchData, useStateContext, useSearchData } from '../../hooks/hooks';
import React from 'react';


export const DataTable:React.FC<{arrayData:any[]}> = ({arrayData}):React.ReactNode => {
  //  const { data } = useFetchData()
  //  const { loading } = useStateContext()
  //  const { searchData } = useSearchData()
  
    return(
        <>
        <div className="sm:w-[70%] w-[90%] overflow-hidden rounded-lg border border-slate-200">
          
  <table className="w-full">
    <thead className="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-900">
      <tr>
        {tableColumns.map((item)=>(
          <>
          <th className="px-2.5 py-2 text-start font-medium">
         {item}
        </th>
          </>
        ))}
        
      </tr>
    </thead>
    <tbody className="group text-sm bg-gray-500 text-slate-800 dark:text-white">
      {arrayData  !== undefined && arrayData !== null ? arrayData.map((d:any, key:any)=>(
      <tr key={key} className="border-b border-slate-200 last:border-0">
        <td className="p-3">
          {d?.id}
        </td>
        <td className="p-3">
          {d?.emailSource}
        </td>
        <td className="p-3">
          {d?.xUser}
        </td>
        <td className="flex p-3 gap-2">
          
          <TableLink id={d.id} target="delete" to='/index'><Trash/></TableLink>
          <TableLink id={d.id} target="edit" to=''><Edit/></TableLink>
          <TableLink id={d.id} target="select" to=''><Eye/></TableLink>
        </td>
      </tr>
     )):<tr className="border-b border-slate-200 last:border-0 collapse">No Content</tr>}
      
      
    </tbody>
  </table>
</div>
   
        </>
    )
}