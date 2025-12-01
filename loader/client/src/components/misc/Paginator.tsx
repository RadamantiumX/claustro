/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '../../icons/icons';
import { useSearchParams } from 'react-router-dom';

export const Paginator = ():React.ReactNode => {
  const pageSize = 5
  const totalRecords = 125

  const [ searchParams, setSearchParams ]:any = useSearchParams()
  const [ currentPage, setCurrentPage ]:any = useState(1)
  
  const end = (currentPage * pageSize) /pageSize + pageSize - 1
  const start = end - pageSize

  // ARRAY GENERATED --> Upper round number length
  // Instead use "ceil()", but this works too
  const arrayPages = Array.from({length: Math.floor(totalRecords/pageSize) + 1}, (_, i)=> i + 1)

  const handleChangePage = (chevronControl:string) =>{
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const currentParam:string | any = searchParams.get("page")
     if(chevronControl === "next" && searchParams.get("page") !== null){
       const numParam = parseInt(currentParam) + 1
      setSearchParams(numParam.toString())
      setCurrentPage(numParam.toString())
     }
  }
  const handleChangeState = (item:string) => {
    setSearchParams({page:item.toString()}); 
    
  }


  useEffect(()=>{
    const numPage = parseInt(searchParams.get("page")) || 1
    setSearchParams({page:currentPage.toString()})
    setCurrentPage(numPage)
  },[searchParams, currentPage])

  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            {searchParams.get("page") !== "1" && <button className='hover:text-amber-600 cursor-pointer'><ChevronLeft/></button>}
            {arrayPages.slice(start,end).map((item, key)=>(
              <button key={key} onFocus={()=>setCurrentPage(searchParams.get("page"))} onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item.toString() === searchParams.get("page") && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            
           
            {searchParams.get("page") !== arrayPages.length.toString() && <button onClick={()=>handleChangePage("next")} className='hover:text-amber-600 cursor-pointer'><ChevronRight/></button>}
        </div>
      </nav>
    </>
  )
}
