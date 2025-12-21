import React from 'react'
import DefaultContent from '../../../../components/sectionsTemplate/DefaultContent'
import { useFetchUniqueData } from '../../../../hooks/hooks';

// TODO: take the example of FORMSECTION ADD
export default function FormSection():React.ReactNode {
  const { data } = useFetchUniqueData()
  return (
    <DefaultContent>
        <div>Some</div>
    </DefaultContent>
  )
}
