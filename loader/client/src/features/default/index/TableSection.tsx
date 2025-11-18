import React from 'react'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { SearchQuery } from '../../../components/misc/SearchQuery'
import { useSearchData } from '../../../hooks/useSearchData'

export default function TableSection():React.ReactNode {
  const { searchP } = useSearchData()
  return (
    <>
    <DefaultContent>
      {searchP !== null && <SearchQuery query={searchP}/>}
        <DataTable query={searchP}/>
     </DefaultContent>
    </>
  )
}
