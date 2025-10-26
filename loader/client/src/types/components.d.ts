import type { ChangeEvent } from 'react';
import { shareProps } from './components.d';
export type btn = "submit" | "reset" | "button" | undefined

export interface shareProps{
    inner: string;
    fontSize: string;
}

export interface btnProps extends shareProps{
   typeBtn: btn;
}

export interface linkProps extends shareProps{
    route:string
}

export interface FormProps{
    handleSubmit: (e:FormEvent<HTMLFormElement>)=>Promise<void>;
    handleChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    authInputs: AuthInputs [];
    dataInputs: DataInputs [];
    innerTextButton: string;
}

export interface NavBarBtnProp{
    inner:string;
}

export interface AuthInputs {
         typeInput: string;
         propInput:string;
         placeholder:string;
         value: string;
        
}

export interface DataInputs extends AuthInputs {
         for: string; 
         label: string;
}