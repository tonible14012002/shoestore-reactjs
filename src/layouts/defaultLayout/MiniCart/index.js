import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import ReactDOM from "react-dom"
import { useEffect, useRef, useState } from "react"
import Button from "../../../components/Button"
import getCart from "../../../services/cartService"

const MiniCart = () => {

    const [show, setShow] = useState()
    const cartDataRef = useRef()
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] = useState({})

    useEffect(() => {
        const getCartData = async () => {
            setLoading(true)
            cartDataRef.current = await getCart()
            setLoading(false)
        }
        console.log('re fetch')
        getCartData()
    }, [fetch])

    const handleClick = () => {
        setFetch({})
        setShow(prev => !prev)
    }

    return ReactDOM.createPortal(
        <div className={`transition-all hidden laptop:block fixed z-50 right-0 top-1/2 -translate-y-[100px] translate-x-[100%]
                ${show && "translate-x-0"} `}
        >   
            <div className="relative w-full h-full bg-white rounded-bl-2xl shadow-md">
                <Button className="absolute bg-gradient-to-b from-orange-500 to-yellow-500 right-[100%] justify-center
                        flex flex-col items-center pl-3 pr-3 pt-3 pb-3 gap-1 rounded-tl-xl rounded-bl-xl text-lg text-white" 
                        type="button"
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <span>2</span>                           
                </Button>

                <div className="w-[350px] p-2 h-full flex flex-col">
                    <ul className="p-0 m-0 w-full h-full min-h-[100px] max-h-[210px] overflow-y-auto ">
                        {!loading &&
                        cartDataRef.current?.map(item => {
                            console.log(item)
                            return (
                                <CartItem 
                                    name={item.product.name}
                                    price={item.option.price}
                                    size={item.option.size.size}
                                    quantity={item.quantity}
                                />                                
                            )
                        })}
                    </ul>

                    <div className="w-full p-2">
                        <div className="flex justify-between">
                            <h3 className="text-sm font-semibold">Total:</h3>
                            <span className="text-sm font-semibold text-red-400">200300 vnd</span>
                        </div>
                        <Button className="w-full p-2 bg-orange-400 hover:bg-orange-500 transition-all 
                                rounded-bl-xl rounded-br-xl text-white font-semibold hover:"

                        >
                            Checkout
                        </Button>                    
                    </div>
                </div>
            </div>
        </div>
    , document.querySelector("body"))
}

const CartItem = ({
    name,
    price,
    size,
    quantity,
    ...props
}) => {
    const totalPrice = price*quantity
    return (
        <li className="m-1 p-2 rounded-2xl grid grid-cols-[80px_1fr] gap-2"
        >
            <div className="w-[80px] h-[80px] rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover"
                    alt="asd" src="http://127.0.0.1:8000/products/22/08/31/Pro_AV00150_2.jpg" 
                />
            </div>
            <div className="text-sm flex flex-col justify-between">
                <h3 className="text-sm m-0">{name || "Basas Workaday High Top"}</h3>
                <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] m-0 p-0 leading-[12px]" >{totalPrice || "20.330vnd"}</span>
                    <div className="flex justify-between">
                        <span className="text-[12px] m-0 p-0 leading-[12px]" >Size:</span>
                        <span className="text-[12px] m-0 p-0 leading-[12px]" >{size || 34}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[12px] m-0 p-0 leading-[12px]">Quantity:</span>
                        <span className="text-[12px] m-0 p-0 leading-[12px]">{quantity || 4}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default MiniCart