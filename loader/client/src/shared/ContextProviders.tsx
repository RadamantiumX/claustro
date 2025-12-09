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
   const {
          user, 
          token, 
          refreshToken, 
          notification, 
          setNotification, 
          setRefreshToken, 
          setUser, 
          setToken, 
          over, 
          setOver, 
          show, 
          setShow, 
          bounce, 
          setBounce, 
          loading, 
          setLoading, 
          responseTime, 
          setResponseTime, 
          inputError, 
          setInputError, 
          data, 
          setData, 
          count, 
          setCount,
          arrayParams,
          setArrayParams
        } = useCtxState()

    return (
        <StateContext.Provider
         value={{
            user,
            token,
            refreshToken,
            over,
            show,
            bounce,
            loading,
            responseTime,
            notification,
            inputError,
            data,
            count,
            arrayParams,
            setUser,
            setToken,
            setRefreshToken,
            setOver,
            setShow, 
            setBounce,
            setLoading,
            setResponseTime,
            setNotification,
            setInputError,
            setData,
            setCount,
            setArrayParams
         }}
        >
            {children}
        </StateContext.Provider>
    )
}

