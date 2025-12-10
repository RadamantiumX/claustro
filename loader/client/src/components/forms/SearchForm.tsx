import React, { useState } from 'react'
import { MagnifyGlass } from '../../icons/icons'

import { useSearchData } from '../../hooks/hooks';
import { useStateContext } from '../../hooks/hooks';

export const SearchForm = ():React.ReactNode => {
   const { data } = useStateContext()
   const [show, setShow] = useState(false)
   const {  setInputValue, handleEnter } = useSearchData()
   // const dataMap = [
   //    "testlin@mailer.com",
   //    "testlin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   //    "lin@mailer.com",
   // ]
  return (
   <>
      <form >
         <div className='relative h-full flex justify-center items-center flex-col'>
             <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>
          
              <input onFocus={()=>setShow(true)} onBlur={()=>{setShow(false)}}  required id="myInput" onKeyDown={handleEnter} onChange={(e)=>setInputValue(e.target.value)} type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
             {
             show &&<div className='abolute top-0 w-[100%] mt-[-0.2%] bg-amber-300 p-2 max-h-50 overflow-y-auto'>
               <p>Results of the query...</p>
               <div className='flex flex-col'>
                 {
                  data.map((d)=>(
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
