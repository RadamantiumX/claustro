import {  useBlocker } from "react-router-dom";
import { useStateContext } from "./useCtxStates";


export const useFormBlocker = () => {
    const { inputError } = useStateContext()
   
    const blocker = useBlocker(
        ({currentLocation, nextLocation })=>
            inputError.length !== 0 &&
            currentLocation.pathname !== nextLocation.pathname
    )

    return { blocker }
}