import { useEffect, useRef, useState } from "react";

const useDebounced = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    const delayTime = useRef(delay)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value)
        }, delayTime.current)

        return () => {
            clearTimeout(timerId)
        }
    }, [value])

    return debouncedValue
}

export default useDebounced