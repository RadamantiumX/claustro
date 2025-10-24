import { useStateContext } from "./useCtxStates";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTRPC } from "../utils/trpc";
import { useMutation } from "@tanstack/react-query"

export const useAddData = () => {
    const { setLoading, setNotification, token } = useStateContext()
    const [ formData, setFormData ] = useState({
        emailSource:'',
        emailSourcePsw: '',
        xUser:'',
        xPsw:'',
        userColabId:''
    })
}