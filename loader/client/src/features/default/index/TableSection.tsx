import React from 'react'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'

import { useFetchData, usePagination, useStateContext } from '../../../hooks/hooks'
import { Paginator } from '../../../components/misc/Paginator';

export default function TableSection():React.ReactNode {
const {currentPage} = useStateContext()
const{ fetchData, responseCount } = useFetchData(currentPage)
const {arrayPages, handleChangePage, handleChangeState, end, start } = usePagination(5, responseCount)
console.log(currentPage)
  return (
    <>
    <DefaultContent>
     
        <DataTable arrayData={fetchData}/>
        <Paginator currentPage={currentPage} arrayPages={arrayPages} handleChangePage={handleChangePage} handleChangeState={handleChangeState} end={end} start={start}/>
    </DefaultContent>
    </>
  )
}
