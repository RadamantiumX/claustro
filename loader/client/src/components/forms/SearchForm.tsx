/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { MagnifyGlass } from '../../icons/icons'

import { useSearchData } from '../../hooks/hooks';

// TODO: move this component outside from the layout

export const SearchForm = ():React.ReactNode => {
 
   const [show, setShow] = useState(false)
   const {  setInputValue, handleEnter,searchData, setSearchData, loading, inputValue } = useSearchData()
 
  return (
   <>
      <form className='pointer-events-auto z-[1000] !blur-none'>
         <div className='relative h-full flex justify-center items-center flex-col'>
             <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>
          
              <input onFocus={()=>setShow(true)} onBlur={()=>{setShow(false)}}  required id="myInput" onKeyDown={handleEnter} onChange={(e)=>setInputValue(e.target.value)} type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
             {
             show &&<div className='abolute top-0 w-[100%] mt-[-0.2%] bg-amber-300 p-2 max-h-50 overflow-y-auto'>
              { loading && <p>Loading results of the query...</p>}
              { searchData.length !== 0 ?  <p>Results of {inputValue}</p>: <p>Search Something...</p>}
               <div className='flex flex-col'>
                 {
                  searchData.map((d:any)=>(
                      <p>
                        {d.emailSource}
                      </p>
                  ))
                 }
               </div>
             </div>
             }
          </div>
      </form>
   </>
  )
}
