import React from 'react'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { SearchQuery } from '../../../components/misc/SearchQuery'
import { useGetParams } from '../../../hooks/useGetParams'

export default function TableSection():React.ReactNode {
  const { searchP } = useGetParams()
  return (
    <>
    <DefaultContent>
      {searchP !== null && <SearchQuery query={searchP}/>}
        <DataTable/>
     </DefaultContent>
    </>
  )
}
