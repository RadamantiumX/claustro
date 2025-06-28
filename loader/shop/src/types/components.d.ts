import { shareProps } from './components.d';
export type btn = "submit" | "reset" | "button" | undefined

export interface shareProps{
    inner: string;
    fontSize: string;
}

export interface btnProps extends shareProps{
   typeBtn: btn;
}