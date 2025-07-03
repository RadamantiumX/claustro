import { useContext, useState } from "react";
import Cookies from "js-cookie";
import type { StateProps } from "../types/shared";
import { StateContext } from "../config/stateContext";

export const useCtxState = () =>{
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
 return {user, token, setUser, setToken}
}

export const useStateContext = ():StateProps => useContext(StateContext)