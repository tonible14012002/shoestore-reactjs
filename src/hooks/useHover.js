import { useEffect, useRef, useState } from "react";


export default function useHover() {
    const [hovered, setHoverd] = useState(false)
    const nodeRef = useRef(null)

    const handleMouseOut = (e) => {setHoverd(false)}
    const handleMouseOver = (e) => {setHoverd(true)}
    useEffect(() => {
        const node = nodeRef.current
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)
        }

        return () => {
            if (node){
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)    
            }
        }        
    }, [])

    return [hovered, nodeRef]
}