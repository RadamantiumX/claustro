import React from 'react'
import { MagnifyGlass } from '../../icons/icons'

export const SearchInput = ():React.ReactNode => {
  return (
    <>
    <div className='realative w-full flex justify-center'>
     <input type="search" className='w-[70%] h-10 p-3 rounded mb-8 italic text-gray-600 bg-amber-100 focus:outline-none focus:shadow-outline text-xl shadow-lg' placeholder='Search Record'/>
     <div className='flex absolute'><MagnifyGlass/></div>
     </div>
    </>
  )
}
