/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'


// Fix the search PARAMS with the REACT ROUTER DOCS: https://reactrouter.com/api/hooks/useSearchParams
export const usePagination = (pageSize:number, totalRecords:number) => {
   const [ searchParams, setSearchParams ]:any = useSearchParams()
  const [ currentPage, setCurrentPage ] = useState(1)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(pageSize)

  const arrayPages = Array.from({length: Math.floor(totalRecords/pageSize) + 1}, (_, i)=> i + 1)

  const handleChangePage = (chevronCntl:string) =>{
    if(chevronCntl === "prev"){
      setSearchParams({page: (currentPage - 1).toString()})
    }else{
      setSearchParams({page: (currentPage + 1).toString()})
    }
     
    
  }

  const handleChangeState = (item:string) => {
    setSearchParams({page:item.toString()}); 
    
  }


  useEffect(()=>{
    
    if(currentPage <= 5){
      setEnd(5)
      setStart(0)
    }
    
   
      setEnd((currentPage * pageSize)/ pageSize + pageSize -1)
      setStart(end - pageSize)
    
    

    const numPage = parseInt(searchParams.get("page")) || 1
    setSearchParams({page:currentPage.toString()})
    setCurrentPage(numPage)
  },[searchParams, currentPage, start, end])

  return { currentPage, arrayPages, handleChangePage, handleChangeState, end, start }
}
