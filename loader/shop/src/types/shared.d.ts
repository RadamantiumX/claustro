import { Dispatch, type SetStateAction } from "react";
export interface StateProps {
    user: null | string | undefined;
    token: null | string | undefined;
    over: boolean;
    bounce: boolean;
    loading: boolean;
    setUser: (user:string | undefined | null)=>void;
    setToken: (token:string | null )=>void; 
    setOver: Dispatch<SetStateAction<boolean>>;
    setBounce: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
}