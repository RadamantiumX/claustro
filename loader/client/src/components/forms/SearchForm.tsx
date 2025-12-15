/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { MagnifyGlass, Close } from '../../icons/icons'
import { useSearchData } from '../../hooks/hooks';
import { Link } from 'react-router-dom';

export const SearchForm = ():React.ReactNode => {
   const {  setInputValue, handleEnter,searchData, loading, inputValue, setShow, show, handleClose } = useSearchData()
 
  return (
   <>
      <form className='pointer-events-auto blur-none'>
         <div className='relative h-full flex justify-center items-center flex-col'>
             <div className='absolute flex flex-col it start-0 inset-y-2 ps-2 text-gray-900'><MagnifyGlass/></div>
          
              <input onFocus={()=>setShow(true)} required id="myInput" onKeyDown={handleEnter} onChange={(e)=>setInputValue(e.target.value)} type="search" className='input-search-block' placeholder='Search Record' title="Record searcher"/>
             {
             show && <div  className='abolute top-0 w-[100%] mt-[-0.2%] bg-amber-300 p-2 max-h-50 overflow-y-auto'>
              
              { loading ? <p>Loading results of the query...</p> : 
              <div className='flex flex-row gap-2'>
                <p>Search Something...</p>
                 <button className='cursor-pointer hover:text-red-500' onClick={handleClose} title='Close Search Query'><Close/></button>
              </div>}
              { searchData.length !== 0 && <p>Results of query <span className='font-bold'>"{inputValue.toLocaleUpperCase()}"</span></p>}
               <div className='flex flex-col'>
                 {
                  searchData.map((d:any)=>(
                      <Link className='cursor-pointer hover:text-red-500 hover:underline' to={`/index/record/${d.id}`}>
                        {d.emailSource}
                      </Link>
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
