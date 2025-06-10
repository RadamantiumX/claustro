/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie'

// interface ContextProps {
//     user: any
//     token: any
//     setUser: ()=>void
//     setToken: ()=>void
// }

const StateContext:any = createContext(
    {
        user: null,
        token: null,

        setUser: () => {},
        setToken: () => {}
    }
)

export const ContextProvider = ({ children }:any) => {
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