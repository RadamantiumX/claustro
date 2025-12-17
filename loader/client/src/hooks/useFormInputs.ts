import { useState, useEffect } from "react";

export interface InputArray {
    for: string;
    label: string;
    typeInput: string;
    propInput: string;
    placeholder: string;
    value: string;
}



export const useFormInputs = (inputsArray:InputArray[]) => {
   const [formInputs, setFormInputs] = useState(inputsArray)
   const formData = {
    value1: "value1",
    value2: "value2",
    value3: "value3",
    value4: "value4",
    value5: "value5",
   }
//    useEffect(()=>{
//     formInputs.map((item, key)=>{
//            setFormInputs([...formInputs, {item.value: }])
//     })
//    },
// [formInputs])
}