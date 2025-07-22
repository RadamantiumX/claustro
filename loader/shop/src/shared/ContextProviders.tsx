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
   const {user, token, setUser, setToken, over, setOver, show, setShow, bounce, setBounce, loading, setLoading, responseTime, setResponseTime} = useCtxState()

    return (
        <StateContext.Provider
         value={{
            user,
            token,
            over,
            show,
            bounce,
            loading,
            responseTime,
            setUser,
            setToken,
            setOver,
            setShow, 
            setBounce,
            setLoading,
            setResponseTime
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

