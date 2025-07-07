import React,{ type JSX, type ReactNode } from "react";
import { useCtxState } from "../hooks/useCtxStates";
import { StateContext } from "../config/stateContext";


/**
 * Context to share data to all component wraped on the App
 * 
 * @param children --> Elements to wrap in this context
 * @returns {JSX.Element}
 */
export const ContextProvider:React.FC<{children: ReactNode}> = ({ children }):JSX.Element => {
   const {user, token, setUser, setToken, over, setOver, bounce, setBounce} = useCtxState()

    return (
        <StateContext.Provider
         value={{
            user,
            token,
            over,
            bounce,
            setUser,
            setToken,
            setOver, 
            setBounce
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

