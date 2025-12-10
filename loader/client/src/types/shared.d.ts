/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, type SetStateAction } from "react";
// import type { DataResource } from "./hooks";

export type ParamTuple = [string, string]
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
    data: any[];
    count: number;
    arrayParams: ParamTuple[];
    currentPage: number;
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
    setData: Dispatch<SetStateAction<any[]>>;
    setCount: Dispatch<SetStateAction<number>>
    setArrayParams:Dispatch<SetStateAction<ParamTuple[]>>;
    setCurrentPage:Dispatch<SetStateAction<number>>;
}