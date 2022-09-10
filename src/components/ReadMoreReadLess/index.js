import { useState } from "react"
import Button from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"

const ReadMoreReadLess = ({children}) => {
    const [isReadMore, setIsReadMore] = useState(false)
    const handleClick = () => {
        setIsReadMore(!isReadMore)
    }
    const readLessPara = children.substring(0, 250).concat('...')

    return (
        <>
            <div className="">
                <span className={`${isReadMore ? "hidden": ""}`}>
                    {readLessPara}
                </span>
                <span className={`block overflow-hidden transition-[all_1s] ${isReadMore?"h-auto":"h-0"}`}>
                    {children}
                </span>
            </div>

            <Button className="text-gray-500 text-md mt-2 text-sm flex items-center justify-center gap-1"
                onClick={handleClick}                        
            >
                <span>
                    {isReadMore ? "Read less" : "Read more"}                    
                </span>
                <span className=" text-xs translate-y-[5%]">
                    {isReadMore?
                    <FontAwesomeIcon icon={faChevronUp} />
                    :<FontAwesomeIcon icon={faChevronDown} />}
                </span>

            </Button>
        </>
    )
}

export default ReadMoreReadLess