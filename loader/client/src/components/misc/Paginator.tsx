import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '../../icons/icons';
import { useSearchParams } from 'react-router-dom';

export const Paginator = ():React.ReactNode => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ currentPage, setCurrentPage ]:any = useState()
  const pages = 10
 
  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            {searchParams.get("page") !== "1" && <button className='hover:text-amber-600 cursor-pointer'><ChevronLeft/></button>}
            <button onFocus={()=>} onClick={()=>setSearchParams({page:"1"})} className='text-2xl cursor-pointer hover:text-amber-600 focus:text-amber-600 active:text-amber-600 visited:text-amber-600'>1</button>
            <button onClick={()=>setSearchParams({page:"2"})} className='text-2xl cursor-pointer hover:text-amber-600 focus:text-amber-600 active:text-amber-600 visited:text-amber-600'>2</button>
            <button className='hover:text-amber-600 cursor-pointer'><ChevronRight/></button>
        </div>
      </nav>
    </>
  )
}
