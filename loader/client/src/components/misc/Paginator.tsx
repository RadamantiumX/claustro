/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ChevronLeft, ChevronRight, Dots } from '../../icons/icons';
import type { PaginationProps } from '../../types/components';



export const Paginator:React.FC<PaginationProps> = ({
  currentPage,
  arrayPages,
  handleChangePage,
  handleChangeState,
  end,
  start
}):React.ReactNode => {
  
  
 
  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            
            {currentPage !== 1 && <button onClick={()=>handleChangePage("prev")}  className='hover:text-amber-600 cursor-pointer'><ChevronLeft/></button>}

            {/* Initial pages: Only page 1 & 2 */
            currentPage > 1 && arrayPages.slice(0,currentPage > 2 ? 2 : 1 ).map((item, key)=>(
              <button key={key}  onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item === currentPage && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}

            {/* Appear on several pages forward⬇️ */
            currentPage > 4 && <button><Dots/></button>}
            {currentPage > 3 && arrayPages.slice((start - 1),(start)).map((item, key)=>(
              <button key={key} onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item === currentPage && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}

            {/* Sliced pages */
            arrayPages.slice(start,end).map((item, key)=>(
              <button key={key}  onClick={()=>handleChangeState(item.toString())} className={`text-2xl cursor-pointer hover:text-amber-600 visited:text-amber-600 ${item === currentPage && 'border rounded-sm border-amber-600 px-2 py-[1px]'}`}>{item}</button>
            ))}
            
        
            {currentPage !== arrayPages.length && <button onClick={()=>handleChangePage("next")} className='hover:text-amber-600 cursor-pointer'><ChevronRight/></button>}
        </div>
      </nav>
    </>
  )
}
