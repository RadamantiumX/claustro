import React, {type FormEvent} from 'react'
import DefaultContent from '../../../components/sectionsTemplate/DefaultContent'
import { GenericForm } from '../../../components/forms/GenericForm'



export default function FormSection():React.ReactNode {
const handleTestChange = () => {
 
}
const handleTestSubmit = async (e:FormEvent<HTMLFormElement>):Promise<void> => {
  console.log(e)
  return
}
  return (
    <DefaultContent>
    
          <GenericForm/>
              
      
    </DefaultContent>
  )
}
