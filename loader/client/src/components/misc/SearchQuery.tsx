import React from 'react'



export const SearchQuery:React.FC<{query:string | null}> = ({query}) => {
  return (
    <div className='w-[70%]'>
        <div className='flex justify-start'>
        <h3 className='text-2xl text-gray-400 italic'>Results of: {query}</h3>
        </div>
    </div>
  )
}
