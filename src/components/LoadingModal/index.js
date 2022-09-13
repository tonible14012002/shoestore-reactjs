import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import ReactDOM from "react-dom"


const LoadingModal = ({coors, ...props}) => {
    return ReactDOM.createPortal(
        <div className="absolute  z-50 rounded-xl flex items-center justify-center"
            style={{
                height: coors.height,
                width: coors.width,
                left: coors.left,
                top:coors.top
            }}
        >
            <FontAwesomeIcon className="text-xl text-neutral-300 animate-spin" icon={faSpinner} />
        </div>
    , document.querySelector("body"))
}

export default LoadingModal