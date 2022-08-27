import { useState, useEffect, useRef } from "react";
import { set } from "react-hook-form";


export default function useToggle (handleClick) {
    const [isActive, setIsActive] = useState(false)
    if (!handleClick || typeof handleClick !== "function"){
        handleClick = (e) => {setIsActive(prev => !prev)}        
    }

    return {isActive,setIsActive, handleClick}
}