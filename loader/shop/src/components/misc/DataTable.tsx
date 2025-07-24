import Data from '../../assets/mock.json'
import { TableLink } from '../buttons/TableLink'
import { Trash, Eye, Edit } from '../../icons/icons';
import { tableColumns } from './const';


export const DataTable = () => {
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
     {Data?.accounts.length > 0 ? Data?.accounts.map((item, key)=>(
      <tr key={key} className="border-b border-slate-200 last:border-0">
        <td className="p-3">
          {item?.id}
        </td>
        <td className="p-3">
          {item?.email}
        </td>
        <td className="p-3">
          {item?.xAccount}
        </td>
        <td className="flex p-3 gap-2">
          <TableLink><Trash/></TableLink>
          <TableLink><Edit/></TableLink>
          <TableLink><Eye/></TableLink>
        </td>
      </tr>
     )): <tr className="border-b border-slate-200 last:border-0 collapse">No Content</tr>}
      
      
    </tbody>
  </table>
</div>
   
        </>
    )
}