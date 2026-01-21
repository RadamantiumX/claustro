import React from 'react'
// import { GenericForm } from '../../../../components/forms/GenericForm'
import { PageSubTitle } from '../../../../components/headers/PageSubTitle'
import { BasicCard } from '../../../../components/cards/BasicCard'
import type { UserSetting } from '../../../../types'


export const UserUpdate = ({userData}:UserSetting):React.ReactNode => {
  console.log(userData)
  return (
    <>
  
    <BasicCard>
      <PageSubTitle title='Basic User data'/>
      <div>
        Some
      </div>
    </BasicCard>
    </>
  )
}
