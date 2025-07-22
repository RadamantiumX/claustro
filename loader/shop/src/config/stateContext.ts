/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import type { StateProps } from "../types/shared";


export const StateContext:React.Context<StateProps> | any = createContext(
    {
        user: null,
        token: null,
        over: false,
        show: false,
        bounce: false,
        loading: false,
        responseTime: null,

        setUser: () => {},
        setToken: () => {},
        setOver: ()=>false,
        setShow: ()=>false,
        setBounce: ()=>false,
        setLoading: ()=>false,
        setResponseTIme: ()=>{}
    }
)