import React from 'react'
import { MagnifyGlass } from '../../icons/icons'

export const SearchInput = ():React.ReactNode => {
  return (
    <>
    <form className='w-[70%] mx-auto'>
    <div className='relative h-full flex justify-center items-center'>
        <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>     
     
     <input type="search" className='block w-full h-10 p-4 ps-15 rounded mb-8 italic text-gray-600 bg-amber-100 focus:outline-none focus:shadow-outline text-xl shadow-lg' placeholder='Search Record'/>
     
        
     </div>
     </form>
    </>
  )
}
