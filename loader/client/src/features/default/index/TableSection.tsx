import React from 'react'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { SearchQuery } from '../../../components/misc/SearchQuery'
import { useGetParams, useFetchData, useStateContext, useSearchData  } from '../../../hooks/hooks'

export default function TableSection():React.ReactNode {
  const { searchP } = useGetParams()
  const { data }:any = useFetchData()
  const { searchData } = useSearchData()
  console.log(searchData)
  return (
    <>
    <DefaultContent>
      {searchP !== null && <SearchQuery query={searchP}/>}
        <DataTable arrayData={searchData.length !== 0 ? searchData : data}/>
     </DefaultContent>
    </>
  )
}
