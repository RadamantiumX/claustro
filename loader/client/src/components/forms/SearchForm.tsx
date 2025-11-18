import React, { useState } from 'react'
import { MagnifyGlass } from '../../icons/icons'
import { useSearchParams } from 'react-router-dom'

export const SearchForm = ():React.ReactNode => {
   const [inputValue, setInputValue] = useState('')
  
   const [searchParams, setSearchParams] = useSearchParams()
   // TODO: change the TYPE EVENT ⬇️
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleEnter = (e:any) =>{
      
      if(e.key === 'Enter' && inputValue !== ''){
         console.log(searchParams)
         e.preventDefault()
         console.log(`Your search: ${inputValue}`)
         setSearchParams({search:inputValue})
         
      }
     
   }

   

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
