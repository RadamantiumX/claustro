/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import type { StateProps } from "../types/shared";


export const StateContext:React.Context<StateProps> | any = createContext(
    {
        user: null,
        token: null,
        refreshToken: null,
        over: false,
        show: false,
        bounce: false,
        loading: false,
        responseTime: null,
        notification: null,
        inputError: [],
        data:[],
        count:null,
        arrayParams:[],
        currentPage:1,
        setUser: () => {},
        setToken: () => {},
        setRefreshToken: ()=>{},
        setOver: ()=>false,
        setShow: ()=>false,
        setBounce: ()=>false,
        setLoading: ()=>false,
        setResponseTIme: ()=>{},
        setNotification: ()=>{},
        setInputError: ()=>{},
        setData:()=>{},
        setCount:()=>{},
        setArrayParams:()=>{},
        setCurrentPage:()=>{}
    }
)