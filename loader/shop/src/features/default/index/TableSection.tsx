import React from 'react'
import { DataCard } from '../../../components/cards/DataCard'
import { DataTable } from '../../../components/misc/DataTable'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'

export default function TableSection() {
  return (
    <>
    <DefaultContent>
     <DataCard>
        <DataTable/>
     </DataCard>
     </DefaultContent>
    </>
  )
}
