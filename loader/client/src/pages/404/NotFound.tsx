import React from 'react'
import { CustomLink } from '../../components/buttons/CustomLink'

export default function NotFound():React.ReactNode {
  return (
    <div className='mt-[10%]'>
    <div className='flex justify-center'>
        <div className='flex flex-col items-center gap-y-20'>
        <h1 className='font-bold text-3xl'>NOT FOUND 404</h1>
        <CustomLink inner='Back to safe route' route='/' fontSize=''/>
        </div>
    </div>
    </div>
  )
}
