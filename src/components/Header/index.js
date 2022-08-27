import { useEffect, useRef, useState } from "react"
import Modal from "../Modal"



const Header = () => {
    const headerRef = useRef()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (!headerRef.current) return
        const handleFixedHeader = (e) => {
            if (window.oldScrollY  > window.scrollY) {
                headerRef.current.style.transform = 'translateY(0)'
            }
            else {
                headerRef.current.style.transform = 'translateY(-100%)'
            }
            window.oldScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleFixedHeader)

        return () => {
            window.removeEventListener('scroll', handleFixedHeader)
        }
    }, [])


    return (
        <>
            <div className="header w-full h-[80px] transition-all shadow-md bg-white border-b-2 fixed z-1 flex items-center pl-10 pr-10" 
                ref={headerRef}
            >
                <button className="transition-all p-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"
                    onClick={() => setShowModal(true)}
                >
                    Show modal
                </button>
            </div>            
            
            <div className="w-full h-[80px]"></div>
            <Modal
                open={showModal} 
                handleClose={() => {setShowModal(false)}}
            />
        </>

    )
}


export default Header