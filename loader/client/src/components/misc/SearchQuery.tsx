import React from 'react'
import { Close } from '../../icons/icons';
import { Link } from 'react-router-dom';
import { useSearchData } from '../../hooks/useSearchData';

export const SearchQuery:React.FC<{query:string | null}> = ({query}) => {
  const { setSearchData } = useSearchData()
  return (
    <div className='w-[70%]'>
        <div className='flex flex-row gap-2 justify-start items-center'>
        <h3 className='text-2xl text-gray-400 italic'>Results of: {query}</h3>
        <Link to="/" onClick={()=>{ setSearchData([]) }} className='hover:text-red-500' title='Remove filter'><Close/></Link>
        </div>
    </div>
  )
}
