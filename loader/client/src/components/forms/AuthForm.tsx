// import { CustomButton } from "../buttons/CustomButton"
import React from "react"
import type { FormProps } from "../../types/components"
import { FormButton } from "../buttons/FormButton"
import { useStateContext } from "../../hooks/useCtxStates"

/**
 * Form component to reuse anywere on this project, can adapt the qty of inputs
 * 
 * @component
 * @param FormProps.handleSubmit --> Function to listen the submit event and send the payload to the API
 * @param FormProps.hanldeChange --> Function to listen the input change
 * @param FormPorps.inputs[] --> Array of inputs for this form
 * @returns 
 */
export const AuthForm:React.FC<Omit<FormProps, 'dataInputs'>> = ({handleSubmit,handleChange, authInputs, innerTextButton}):React.ReactNode => {
  const { loading } = useStateContext()
 
    return(
        <>
        <div className="flex-center">
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {authInputs.map((input, key)=>(
                <input key={key} className={`input-rounded ${loading ? "opacity-40" : ""}`}
                id={input.propInput}
                name={input.propInput} 
                type={input.typeInput} 
                placeholder={input.placeholder} 
                value={input.value} 
                onChange={handleChange}
                disabled={loading}
                required
                />
              ))}
              <FormButton loading={loading}>
                {innerTextButton}
              </FormButton>
            </form>
        </div>
        </>
    )
}
///// TODO: Set disabled when is loading the fetch on server --> ✅ Done