import React, {type FormEvent} from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { BasicCard } from '../../../components/cards/BasicCard'
import { PageSubTitle } from '../../../components/headers/PageSubTitle'
import { Form } from '../../../components/forms/Form'

export default function FormSection():React.ReactNode {
const handleTestChange = () => {
 
}
const handleTestSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> => {
  console.log(e)
  return
}
  return (
    <DefaultContent>
       <BasicCard>
              <PageSubTitle title='Adding new Data'/>
              <Form
                              handleChange={handleTestChange} 
                              handleSubmit={handleTestSubmit} 
                              inputs={[
                                {typeInput:"email", propInput:"email-source", value: '', placeholder:"Email Source"},
                                {typeInput: "text", propInput:"email-password",value:'', placeholder: "Email Source Psw"},
                                {typeInput: "text", propInput:"x-user",value:'', placeholder: "X Username"},
                                {typeInput: "text", propInput:"x-password",value:'', placeholder: "X Password"}
                            ]}
                              innerTextButton="Adding Data Record"
                              />
       </BasicCard>
    </DefaultContent>
  )
}
