import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchUniqueData } from '../../../../hooks/hooks';


export default function FormSection():React.ReactNode {
  const { relatedData } = useFetchUniqueData()
  return (
    <DefaultContent>
        <div>Some</div>
    </DefaultContent>
  )
}
