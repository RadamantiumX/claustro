/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Dots } from '../../icons/icons';
import { useSearchParams } from 'react-router-dom';

export const Paginator = ():React.ReactNode => {
  const pageSize = 5
  const totalRecords = 140

  const [ searchParams, setSearchParams ]:any = useSearchParams()
  const [ currentPage, setCurrentPage ] = useState(1)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)
  const [startPrev, setStartPrev] = useState(0)
  const [endPrev, setEndPrev] = useState(0)
  // const end = (currentPage * pageSize) /pageSize + pageSize - 1
  // const start = end - pageSize

  // ARRAY GENERATED --> Upper round number length
  // Instead use "ceil()", but this works too
  const arrayPages = Array.from({length: Math.floor(totalRecords/pageSize) + 1}, (_, i)=> i + 1)

  const handleChangePage = (chevronControl:string) =>{
    
     if(chevronControl === "next"){
      setCurrentPage(+1)
     }else{
       setCurrentPage(-1)
     }
  }

  const handleChangeState = (item:string) => {
    // if(item === "1"){
    //   setStart(0)
    //   setEnd(5)
    // }
    setSearchParams({page:item.toString()}); 
    
  }


  useEffect(()=>{
    
    if(currentPage <= 5){
      setEnd(5)
      setStart(0)
    }
    
   
      setEnd((currentPage * pageSize)/ pageSize + pageSize -1)
      setStart(end - pageSize)
    
    

    const numPage = parseInt(searchParams.get("page")) || 1
    setSearchParams({page:currentPage.toString()})
    setCurrentPage(numPage)
  },[searchParams, currentPage, start, end])
 
  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            
            {searchParams.get("page") !== "1" && <button onClick={()=>handleChangePage("prev")}  className='hover:text-amber-600 cursor-pointer'><ChevronLeft/></button>}
            {currentPage >= 3 && arrayPages.slice(0,2).map((item, key)=>(
              <button key={key} onFocus={()=>setCurrentPage(searchParams.get("page"))} onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item.toString() === searchParams.get("page") && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            {currentPage > 4 && <button><Dots/></button>}
            {currentPage > 3 && arrayPages.slice((start - 1),(start)).map((item, key)=>(
              <button key={key} onFocus={()=>setCurrentPage(searchParams.get("page"))} onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item.toString() === searchParams.get("page") && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            {arrayPages.slice(start,end).map((item, key)=>(
              <button key={key} onFocus={()=>setCurrentPage(searchParams.get("page"))} onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item.toString() === searchParams.get("page") && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            
           {/* <button><Dots/></button>*/}
            {searchParams.get("page") !== arrayPages.length.toString() && <button onClick={()=>handleChangePage("next")} className='hover:text-amber-600 cursor-pointer'><ChevronRight/></button>}
        </div>
      </nav>
    </>
  )
}
