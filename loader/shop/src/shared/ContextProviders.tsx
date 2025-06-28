/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{ createContext, useContext, useState, type JSX, type ReactNode } from "react";
import Cookies from 'js-cookie'

interface StateProps {
    user: null | string | undefined;
    token: null | string | undefined;
    setUser: (user:string)=>void;  // React.Dispatch<React.SetStateAction<string| undefined>>
    setToken: (token:string)=>void; // React.Dispatch<React.SetStateAction<string| undefined>>
}

const StateContext:React.Context<StateProps> | any = createContext(
    {
        user: null,
        token: null,

        setUser: () => {},
        setToken: () => {}
    }
)

export const ContextProvider:React.FC<{children: ReactNode}> = ({ children }):JSX.Element => {
    const [ user, _setUser ] = useState(Cookies.get(`${import.meta.env.VITE_USERNAME}`))
    const [token, _setToken] = useState(Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`))

    const setToken = (token:string) => {
        _setToken(token)
        if(token){
            Cookies.set(`${import.meta.env.VITE_ACCESS_TOKEN}`,token, {expires: 7})
        }else{
            Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
        }
    }

    const setUser = (user:string) =>{
        _setUser(user)
        if(user){
            Cookies.set(`${import.meta.env.VITE_USERNAME}`, user,{expires: 7})
        }else{
            Cookies.remove(`${import.meta.env.VITE_USERNAME}`)
        }
    }

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