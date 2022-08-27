
import { useState } from "react"

const useModal = () => {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(prev => !prev)
    }
    const handleClose = () => {
        setShow(false)
    }
    return {show, handleClick, handleClose}
}

export default useModal