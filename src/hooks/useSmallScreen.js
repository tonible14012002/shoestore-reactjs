import { useLayoutEffect, useState } from "react"


const useSmallScreen = (width) => {

    const [isSmall, setIsSmall] = useState(false)

    useLayoutEffect(() => {
        const handleSizeChange = () => {
            setIsSmall(window.innerWidth <= width)
        }
        handleSizeChange()
        window.addEventListener('resize', handleSizeChange)
        return () => window.removeEventListener('resize', handleSizeChange)
    }, [width])

    return isSmall
}

export default useSmallScreen