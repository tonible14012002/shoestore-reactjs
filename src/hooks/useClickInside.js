import { useRef, useState, useEffect } from "react"



const useClickInside = () => {
    const [isClickedInside, setIsClickedInside] = useState(false)
    const containerRef = useRef()

    const handleDocumentClick = useRef((e) => {
        if (containerRef.current)
            if (containerRef.current.contains(e.target)) {
                setIsClickedInside(true)
            }
            else {
                setIsClickedInside(false)
            }
    })

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick.current)
        const toRemove = handleDocumentClick.current
        return () => document.removeEventListener("click", toRemove)
    }, [])

    return {isClickedInside, containerRef, setIsClickedInside}
}

export default  useClickInside