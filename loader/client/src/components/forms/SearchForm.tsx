import React from 'react'
import { MagnifyGlass } from '../../icons/icons'

import { useSearchData } from '../../hooks/hooks';

export const SearchForm = ():React.ReactNode => {

   const {  setInputValue, handleEnter } = useSearchData()
  return (
   <>
      <form >
         <div className='relative h-full flex justify-center items-center'>
             <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>
          
              <input required id="myInput" onKeyDown={handleEnter} onChange={(e)=>setInputValue(e.target.value)} type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
          
          </div>
      </form>
   </>
  )
}
