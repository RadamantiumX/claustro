/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import type { StateProps } from "../types/shared";


export const StateContext:React.Context<StateProps> | any = createContext(
    {
        user: null,
        token: null,
        over: false,

        setUser: () => {},
        setToken: () => {},
        setOver: ()=>false
    }
)