import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBars, faEllipsis, faEllipsisVertical, faX } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../components/Button"
import ReactDOM from "react-dom";
import useModalDropdown from "../../../hooks/useModalDropdown";


const Menu = () => {

    const {
        show,
        parentRef:menuRef,
        coors,
        handleClick,
        handleClose 
    } = useModalDropdown()

    return (<>
        <button className={`flex items-center pl-4 pr-4 pt-2 pb-2
            rounded-2xl cursor-pointer transition-colors relative`}
            onClick={handleClick}
            ref={menuRef}
        >
            <span>
                {show ? <FontAwesomeIcon icon={faX} />
                :<FontAwesomeIcon icon={faEllipsisVertical} />}
                
            </span>
            <span className="ml-2">Menu</span>
            
            
        </button>
        {show && <SideBar coors={coors} onClose={handleClose} />}
        
    </>)
}

const SideBar = ({coors, onClose , ...props}) => {

    if (!coors) coors = document.body.getBoundingClientRect()

    return ReactDOM.createPortal(
        <div className="fixed bg-white rounded-2xl shadow-md z-30 w-[300px]"
            style={{
                left: coors.left,
                top: coors.top + coors.height + 20

            }}
        >
            <ul className="p-0 m-0 w-full h-full overflow-hidden rounded-2xl flex flex-col">
                <li className="cursor-pointer hover:bg-gray-50 text-start pl-6 pt-3 pb-3" >
                    <Button>Terms and Policies</Button>
                </li>

                <li className="cursor-pointer hover:bg-gray-50 text-start pl-6 pt-3 pb-3 border-t " >
                    <Button to={{pathname: "/product-list", state: {modal:true}}}>Shop</Button>
                </li>

                <li className="cursor-pointer hover:bg-gray-50 text-start pl-6 pt-3 pb-3 border-t" >
                    <Button>Contact</Button>
                </li>

            </ul>
            <Button className="absolute bg-white cursor-pointer rounded-full w-[30px] h-[30px] shadow-md right-0 bottom-0 translate-x-1/2 translate-y-1/2"
                onClick={onClose}
            >
                    <FontAwesomeIcon className="text-start text-xs" icon={faX} />
            </Button>
        </div>
    ,document.querySelector("body"))
}

export default Menu