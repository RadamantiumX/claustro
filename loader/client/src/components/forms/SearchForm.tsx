import React, { useState, useEffect, type FormEvent } from 'react'
import { MagnifyGlass } from '../../icons/icons'


export const SearchForm = ():React.ReactNode => {
   const [inputValue, setInputValue] = useState('')
   const [ idInput, setIdInput ]:any = useState(null)
   
   // TODO: change the TYPE EVENT ⬇️
   const handleEnter = (e:any) =>{
      
      if(e.key === 'Enter' && inputValue !== ''){
         e.preventDefault()
         console.log(`Your search: ${inputValue}`)
      }
   }

   useEffect(()=>{
      setIdInput(document.getElementById('myInput'))
   },[])

  return (
   <>
      <form >
         <div className='relative h-full flex justify-center items-center'>
             <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>
          
              <input id="myInput" onKeyDown={handleEnter} onChange={(e)=>setInputValue(e.target.value)} type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
          
          </div>
      </form>
   </>
  )
}
