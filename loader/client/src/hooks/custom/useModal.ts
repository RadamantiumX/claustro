import { useState } from "react"

export const useModal = () =>{
  const [ show, setShow ] = useState(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  return {show, handleOpen, handleClose}
}