import Data from '../../assets/mock.json'
import { CustomLink } from '../buttons/CustomLink'



export const DataTable = () => {
    return(
        <>
        <div className="w-full overflow-hidden rounded-lg border border-slate-200">
  <table className="w-full">
    <thead className="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-900">
      <tr>
        <th className="px-2.5 py-2 text-start font-medium">
          Id
        </th>
        <th className="px-2.5 py-2 text-start font-medium">
          User Email
        </th>
        <th className="px-2.5 py-2 text-start font-medium">
          X Username
        </th>
        <th className="px-2.5 py-2 text-start font-medium">
        </th>
      </tr>
    </thead>
    <tbody className="group text-sm text-slate-800 dark:text-white">
     {Data.accounts.map((item, key)=>(
      <tr key={key} className="border-b border-slate-200 last:border-0">
        <td className="p-3">
          {item.id}
        </td>
        <td className="p-3">
          {item.email}
        </td>
        <td className="p-3">
          {item.xAccount}
        </td>
        <td className="flex p-3 gap-2">
          <CustomLink inner='Edit' route='#' fontSize=''/>
          <CustomLink inner='Delete' route='#' fontSize=''/>
        </td>
      </tr>
     ))}
      
      
    </tbody>
  </table>
</div>
   {/*<table className="">
  <thead className='flex flex-col  items-center'>
    <tr className='flex gap-x-5 p-4'>
      <th className='flex p-5 gap-x-2'>id</th>
      <th className='flex p-5 gap-x-2'>Email Account</th>
      <th className='flex p-5 gap-x-2'>X Account</th>
      <th className='flex p-5 gap-x-2'></th>
    </tr>
  </thead>
  <tbody className='flex flex-col  items-center'>
    {
      Data.accounts.map((item, key)=>(
      <tr className='flex gap-x-5 p-4' key={key}>
      <td className='flex p-5 gap-x-2'>{item.id}</td>
      <td className='flex p-5 gap-x-2'>{item.email}</td>
      <td className='flex p-5 gap-x-2'>{item.xAccount}</td>
      <td className='flex p-5 gap-x-2'><CustomButton typeBtn='button' inner='Edit' fontSize=''/> <CustomButton typeBtn='button' inner='Delete' fontSize=''/></td>
    </tr>
      ))
    }
    
   
  </tbody>
</table>*/}
        </>
    )
}