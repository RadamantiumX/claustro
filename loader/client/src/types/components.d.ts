/* eslint-disable @typescript-eslint/no-explicit-any */
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
    dataInputs: DataInputs [] | any[];
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

export interface CardConfirmProps {
  legend:string;
  acceptFn: ()=>void;
  rejectFn: ()=>void;
}

export interface ErrorInputResponse {
      code: string;
      minimum: number;
      type: string;
      inclusive: boolean;
      exact: boolean;
      message: string;
      path: string[]
}

export interface PaginationProps {
  currentPage: number;
  arrayPages: number[]
  handleChangePage:(chevronCntl:string)=>void;
  handleChangeState:(item:string)=>void;
  end:number;
  start:number
}