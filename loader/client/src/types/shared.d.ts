/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, type SetStateAction } from "react";
// import type { DataResource } from "./hooks";
import  { type RouterInput, type RouterOutput } from "../utils/trpc";

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

// TODO: Adding all TRPC types INPUT & OUTPUT

// Inputs
export type DataListInput = RouterInput['data']['list']
export type DataCreateInput = RouterInput['data']['create']
export type DataSearchInput = RouterInput['data']['search']
export type DataSelectForIdInput = RouterInput['data']['selectForId']
export type DataSelectFormEmailInput = RouterInput['data']['selectForEmail']
export type DataUpdateInput = RouterInput['data']['update']
export type DataDeleteInput = RouterInput['data']['delete']

export type ApiDataSelectForIdInput = RouterInput['apiData']['selectForId']
export type ApiDataCreateInput = RouterInput['apiData']['create']
export type ApiDataUpdateInput = RouterInput['apiData']['update']
export type ApiDataDeleteInput = RouterInput['apiData']['delete']

export type ApiKeySelectForIdInput = RouterInput['apiKey']['selectForId']
export type ApiKeyCreateInput = RouterInput['apiKey']['create']
export type ApiKeyUpdateInput = RouterInput['apiKey']['update']
export type ApiKeyDeleteInput = RouterInput['apiKey']['delete']

export type AuthLoginInput = RouterInput['auth']['login']
export type AuthRegisterInput = RouterInput['auth']['register']
export type AuthLogoutInput = RouterInput['auth']['logout']


export type UserColabCreateInput = RouterInput['userColab']['create']
export type UserColabDeleteInput = RouterInput['userColab']['delete']
export type UserColabUpdateInput = RouterInput['userColab']['update']

export type RefreshTokenRefreshInput = RouterInput['refreshToken']['refresh']

export type UnionInput = DataListInput | DataCreateInput | DataSearchInput | DataSelectForIdInput | DataSelectFormEmailInput | DataUpdateInput | DataDeleteInput | 
ApiDataSelectForIdInput | ApiDataCreateInput | ApiDataUpdateInput | ApiDataDeleteInput | ApiKeySelectForIdInput | ApiKeyCreateInput | ApiKeyUpdateInput | ApiKeyDeleteInput |
AuthLoginInput | AuthRegisterInput | AuthLogoutInput | UserColabCreateInput | UserColabDeleteInput | UserColabUpdateInput | RefreshTokenRefreshInput


// Outputs 
// TODO: Finish this
export type DataListOutput = RouterOutput['data']['list']
export type DataCreateOutput = RouterOutput['data']['create']
export type DataSearchOutput = RouterOutput['data']['search']
export type DataSelectForIdOutput = RouterOutput['data']['selectForId']
export type DataSelectForEmailOutput = RouterOutput['data']['selectForEmail']
export type DataUpdateOutput = RouterOutput['data']['update']
export type DataDeleteOutput = RouterOutput['data']['delete']

export type ApiDataSelectIdOutput = RouterOutput['apiData']['selectForId']
export type ApiDataCreateOutput = RouterOutput['apiData']['create']
export type ApiDataUpdateOutput = RouterOutput['apiData']['update']
export type ApiDataDeleteOutput = RouterOutput['apiData']['delete']

export type ApiKeySelectIdOutput = RouterOutput['apiKey']['selectForId']
export type ApiKeyCreateOutput = RouterOutput['apiKey']['create']
export type ApiKeyUpdateOutput = RouterOutput['apiKey']['update']
export type ApiKeyDeleteOutput = RouterOutput['apiKey']['delete']

export type AuthLoginOutput = RouterOutput['auth']['login']
export type AuthRegisterOutput = RouterOutput['auth']['register']
export type AuthLogoutOutput = RouterOutput['auth']['logout']

export type UserColabCreateOutput = RouterOutput['userColab']['create']
export type UserColabDeleteOutput = RouterOutput['userColab']['delete']
export type UserColabUpdateOutput = RouterOutput['userColab']['update']
export type UserColabListOutput = RouterOutput['userColab']['list']

export type RefreshTokenRefreshOutput = RouterOutput['refreshToken']['refresh']