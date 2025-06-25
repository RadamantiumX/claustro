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

export const Forms:React.FC<FormProps> = ({handleSubmit,handleChange, inputs}) => {
    return(
        <>
        <div className="flex flex-col items-center">
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {inputs.map((input, key)=>(
                <input key={key} className="py-1 px-2 rounded-sm" 
                id={input.propInput}
                name={input.propInput} 
                type={input.typeInput} 
                placeholder={input.placeholder} 
                value={input.value} 
                onChange={handleChange}/>
              ))}
              
              <CustomButton inner="Login"  typeBtn="submit" />
            </form>
            </div>
        </>
    )
}