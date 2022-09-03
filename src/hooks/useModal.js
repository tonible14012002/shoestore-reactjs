
import { useState } from "react"

const useModal = () => {
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(prev => !prev)
    }
    const handleClose = (e) => {
        e?.preventDefault()
        setShow(false)
    }
    return {show, handleClick, handleClose}
}

export default useModal