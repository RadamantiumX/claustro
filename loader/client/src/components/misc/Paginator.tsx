import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '../../icons/icons';
import { useSearchParams } from 'react-router-dom';

export const Paginator = ():React.ReactNode => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const [ currentPage, setCurrentPage ]:any = useState()
  const[start, setStart] = useState(0)
  const[end, setEnd] = useState(5)
  const pageSize = 5
  const totalRecords = 125

  // ARRAY GENERATED --> Upper round number length
  const arrayPages = Array.from({length: Math.floor(totalRecords/pageSize) + 1}, (_, i)=> i + 1)

  useEffect(()=>{
    if(searchParams.get("page") === end.toString() && searchParams.get("page") !== arrayPages.length.toString()){
      setStart( start+2)
      setEnd(end+2)
    }
    // if(searchParams.get("page") === end.toString() || searchParams.get("page") !== "1"){
    //   setStart( start - 2)
    //   setEnd(end - 2)
    // }
  },[start, end, searchParams])

  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            {searchParams.get("page") !== "1" && <button className='hover:text-amber-600 cursor-pointer'><ChevronLeft/></button>}
            {arrayPages.slice(start,end).map((item, key)=>(
              <button key={key} onFocus={()=>setCurrentPage(item.toString())} onClick={()=>setSearchParams({page:item.toString()})} className={`text-2xl cursor-pointer hover:text-amber-600 focus:text-amber-600 active:text-amber-600 visited:text-amber-600 ${item.toString() === searchParams.get("page") && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            
           
            {searchParams.get("page") !== arrayPages.length.toString() && <button className='hover:text-amber-600 cursor-pointer'><ChevronRight/></button>}
        </div>
      </nav>
    </>
  )
}
