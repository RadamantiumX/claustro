/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, type JSX, type ReactNode } from "react";
import Cookies from 'js-cookie'

 

const StateContext:any = createContext(
    {
        user: null,
        token: null,

        setUser: () => {},
        setToken: () => {}
    }
)

export const ContextProvider:React.FC<{children: ReactNode}> = ({ children }):JSX.Element => {
    const [ user, _setUser ] = useState(Cookies.get(import.meta.env.USERNAME))
    const [token, _setToken] = useState(Cookies.get(import.meta.env.ACCESS_TOKEN))

    const setToken = (token:any) => {
        _setToken(token)
        if(token){
            Cookies.set(import.meta.env.ACCESS_TOKEN,token, {expires: 7})
        }else{
            Cookies.remove(import.meta.env.ACCESS_TOKEN)
        }
    }

    const setUser = (user:any) =>{
        _setUser(user)
        if(user){
            Cookies.set(import.meta.env.USERNAME, user,{expires: 7})
        }else{
            Cookies.remove(import.meta.env.USERNAME)
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

export const useStateContext = () => useContext(StateContext)