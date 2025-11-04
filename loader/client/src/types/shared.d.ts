/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, type SetStateAction } from "react";
export interface StateProps {
    user: null | string | undefined;
    token: null | string | undefined;
    refreshToken: null | string | undefined;
    over: boolean;
    show: boolean;
    bounce: boolean;
    loading: boolean;
    responseTime: number;
    notification: string;
    inputError: any[];
    setUser: (user:string | undefined | null)=>void;
    setToken: (token:string | null )=>void; 
    setRefreshToken: (token:string | null )=>void; 
    setOver: Dispatch<SetStateAction<boolean>>;
    setShow: Dispatch<SetStateAction<boolean>>;
    setBounce: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setResponseTime: Dispatch<SetStateAction<number>>;
    setNotification: (notification:string)=>void;
    setInputError:Dispatch<SetStateAction<any[]>>;
}