import { Dispatch, type SetStateAction } from "react";
export interface StateProps {
    user: null | string | undefined;
    token: null | string | undefined;
    over: boolean;
    bounce: boolean;
    disabled: boolean;
    setUser: (user:string | undefined | null)=>void;
    setToken: (token:string | null )=>void; 
    setOver: Dispatch<SetStateAction<boolean>>;
    setBounce: Dispatch<SetStateAction<boolean>>;
    setDisabled: Dispatch<SetStateAction<boolean>>;
}