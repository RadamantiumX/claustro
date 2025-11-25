import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from '../../icons/icons';
import { useSearchParams } from 'react-router-dom';

export const Paginator = ():React.ReactNode => {
  const [  ]
  const pages = 10
  return (
    <>
      <nav>
        <div className='flex flex-row gap-2'>
            <Link className='hover:text-amber-600' to="#"><ChevronLeft/></Link>
            <Link className='hover:text-amber-600 focus:text-amber-600' to="">1</Link>
            <Link className='hover:text-amber-600 focus:text-amber-600' to="">2</Link>
            <Link className='hover:text-amber-600' to="#"><ChevronRight/></Link>
        </div>
      </nav>
    </>
  )
}
