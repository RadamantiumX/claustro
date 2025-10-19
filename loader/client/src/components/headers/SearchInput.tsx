import React from 'react'
import { MagnifyGlass } from '../../icons/icons'

export const SearchInput = ():React.ReactNode => {
  return (
    <>
    <form className='w-[70%] mx-auto'>
    <div className='relative h-full flex justify-center items-center'>
        <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>     
     
     <input type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
     
        
     </div>
     </form>
    </>
  )
}
