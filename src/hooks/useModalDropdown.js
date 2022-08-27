
import { useRef, useState } from "react"

const useModalDropdown = () => {
    const [show, setShow] = useState(false)
    const parentRef = useRef()
    const [coors, setCoors] = useState({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
    })

    const handleClick = () => {
        setShow(prev => !prev)
        setCoors(parentRef.current.getBoundingClientRect())
    }
    const handleClose = () => {
        setShow(false)
    }
    return {show, parentRef, coors, handleClick, handleClose}
}

export default useModalDropdown