import { useState} from "react"

export const useRotate = () =>{
    const [rotate, setRotate] = useState(false)
        const handleRotate = () =>{
            if(!rotate){
                setRotate(true)
            }else{
                setRotate(false)
            }
        }

     return { rotate, handleRotate }   
}