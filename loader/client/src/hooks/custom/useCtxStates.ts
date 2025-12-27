import { useContext, useState } from "react";
import Cookies from "js-cookie";
import type { StateProps } from "../../types/shared";
import { StateContext } from "../../config/stateContext";

export interface ObjParams  {
    message:string;
    path:string
}

export const useCtxState = () =>{
    const [ user, _setUser ] = useState(Cookies.get(`${import.meta.env.VITE_USERNAME}`))
    const [token, _setToken] = useState(Cookies.get(`${import.meta.env.VITE_ACCESS_TOKEN}`))
    const [refreshToken, _setRefreshToken] = useState(Cookies.get(`${import.meta.env.VITE_REFRESH_TOKEN}`))
    const [over, setOver] = useState(false)
    const [show, setShow] = useState(false)
    const [bounce, setBounce] = useState(false)
    const [loading, setLoading] = useState(false)
    const [responseTime, _setResponseTime] = useState(0)
    const [notification, _setNotification] = useState('')

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [arrayParams, setArrayParams] = useState([])

    const [inputError, setInputError] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const setToken = (token:string) => {
        _setToken(token)
        if(token){
            Cookies.set(`${import.meta.env.VITE_ACCESS_TOKEN}`,token, {expires: 1})
        }else{
            Cookies.remove(`${import.meta.env.VITE_ACCESS_TOKEN}`)
            _setToken(undefined) // If the code === 401
        }
    }

    const setRefreshToken = (refreshToken:string) =>{
        _setRefreshToken(refreshToken)
        if(refreshToken){
            Cookies.set(`${import.meta.env.VITE_REFRESH_TOKEN}`,refreshToken, {expires: 1})
        }else{
            Cookies.remove(`${import.meta.env.VITE_REFRESH_TOKEN}`)
        }
    }

    const setUser = (user:string) =>{
        _setUser(user)
        if(user){
            Cookies.set(`${import.meta.env.VITE_USERNAME}`, user,{expires: 7})
        }else{
            Cookies.remove(`${import.meta.env.VITE_USERNAME}`)
            _setUser(undefined) // If the code === 401 
        }
    }

    const setResponseTime = (time:number) =>{
        _setResponseTime(time)
    
    }

    const setNotification = (message:string) =>{
        _setNotification(message)
        setTimeout(()=>{
            _setNotification('')
        },5000)
    }

 return { 
          user, 
          token, 
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
          refreshToken, 
          setRefreshToken, 
          notification, 
          setNotification, 
          inputError, 
          setInputError,
          data,
          setData,
          count,
          setCount,
          arrayParams,
          setArrayParams,
          currentPage,
          setCurrentPage
        }
}

export const useStateContext = ():StateProps => useContext(StateContext)