// import { CustomButton } from "../buttons/CustomButton"
import React from "react"
import type { FormProps } from "../../types/components"
import { LoginButton } from "../buttons/LoginButton"
import { useStateContext } from "../../hooks/useCtxStates"
import { Loader } from "../../icons/Loader"
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
  const { disabled } = useStateContext()
    return(
        <>
        <div className="flex-center">
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {inputs.map((input, key)=>(
                <input key={key} className="input-rounded opacity-40" 
                id={input.propInput}
                name={input.propInput} 
                type={input.typeInput} 
                placeholder={input.placeholder} 
                value={input.value} 
                onChange={handleChange}
                disabled={disabled}
                />
              ))}
              <LoginButton>
                {
                  !disabled ? <div>Sing In</div> : <div className="flex flex-row items-center gap-x-5"><Loader/> Loading...</div>
                }
              </LoginButton>
              {/*<CustomButton inner="Login"  typeBtn="submit" fontSize=""/>*/}
            </form>
        </div>
        </>
    )
}
// TODO: Set disabled when is loading the fetch on server