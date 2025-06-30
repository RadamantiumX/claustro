import { CustomButton } from "../buttons/CustomButton"
import React from "react"
import type { FormProps } from "../../types/components"

/**
 * Form component to reuse anywere on this project, can adapt the qty of inputs
 * 
 * @component
 * @param FormProps.handleSubmit --> Function to listen the submit event and send the payload to the API
 * @param FormProps.hanldeChange --> Function to listen the input change
 * @param FormPorps.inputs[] --> Array of inputs for this form
 * @returns 
 */
export const Form:React.FC<FormProps> = ({handleSubmit,handleChange, inputs}):React.ReactNode => {
    return(
        <>
        <div className="flex-center">
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {inputs.map((input, key)=>(
                <input key={key} className="input-rounded" 
                id={input.propInput}
                name={input.propInput} 
                type={input.typeInput} 
                placeholder={input.placeholder} 
                value={input.value} 
                onChange={handleChange}/>
              ))}
              
              <CustomButton inner="Login"  typeBtn="submit" fontSize=""/>
            </form>
        </div>
        </>
    )
}