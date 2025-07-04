import { useState} from "react"

export const useMouseOver = () =>{
    const [ over, setOver ] = useState(false)

    return {over, setOver}
}