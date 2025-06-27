/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomButton } from "../buttons/CustomButton"
import React from "react"

export interface FormProps{
    handleSubmit: (e:any)=>Promise<void>;
    handleChange: (e:any)=>void;
    inputs: 
        {
            typeInput: string;
            propInput:string;
            placeholder:string;
            value: string;
        }[]
    
}

export const Form:React.FC<FormProps> = ({handleSubmit,handleChange, inputs}) => {
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