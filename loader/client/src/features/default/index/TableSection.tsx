import React from 'react'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { SearchQuery } from '../../../components/misc/SearchQuery'
import { useGetParams, useStateContext, useFetchData } from '../../../hooks/hooks'
import { Paginator } from '../../../components/misc/Paginator';

export default function TableSection():React.ReactNode {
  const { searchP } = useGetParams()
  const { data, count } = useStateContext()
  useFetchData()

  return (
    <>
    <DefaultContent>
      {searchP !== null && <SearchQuery query={searchP}/>}
        <DataTable arrayData={data}/>
        <Paginator pageSize={5} totalPages={count}/>
    </DefaultContent>
    </>
  )
}
