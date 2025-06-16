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
    const [ user, setUser ] = useState({})
    const [token, _setToken] = useState(Cookies.get('ACCESS_TOKEN'))

    const setToken = (token:any) => {
        _setToken(token)
        if(token){
            Cookies.set('ACCESS_TOKEN',token, {expires: 7})
        }else{
            Cookies.remove('ACCESS_TOKEN')
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