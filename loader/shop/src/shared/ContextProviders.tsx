/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{ createContext, useContext, type JSX, type ReactNode } from "react";
import { useContextState } from "../hooks/useContextStates";
import type { StateProps } from "../types/shred";


// Context initials values
const StateContext:React.Context<StateProps> | any = createContext(
    {
        user: null,
        token: null,

        setUser: () => {},
        setToken: () => {}
    }
)
/**
 * Context to share data to all component wraped on the App
 * 
 * @param children --> Elements to wrap in this context
 * @returns {JSX.Element}
 */
export const ContextProvider:React.FC<{children: ReactNode}> = ({ children }):JSX.Element => {
   const {user, token, setUser, setToken} = useContextState()

    return (
        <StateContext.Provider
         value={{
            user,
            token,
            setUser,
            setToken
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ():StateProps => useContext(StateContext)