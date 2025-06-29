import { CustomButton } from "../buttons/CustomButton"
import React from "react"
import type { FormProps } from "../../types/components"


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