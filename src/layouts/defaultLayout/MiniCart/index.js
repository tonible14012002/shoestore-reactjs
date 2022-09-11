import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import ReactDOM from "react-dom"
import { useEffect, useState, useContext } from "react"
import Button from "../../../components/Button"
import getCart from "../../../services/cartService"
import { useRef } from "react"
import {CartContext} from "../../../cart"
const MiniCart = () => {

    const [show, setShow] = useState()
    const [cartData, setCartData] = useContext(CartContext)
    const setCart = useRef(setCartData)
    const [loading, setLoading] = useState(false)

    const isMounted = useRef(false)

    useEffect(()=> {
        isMounted.current = true
        return () => isMounted.current = false
    },[])

    useEffect(() => {
        const getCartData = async () => {
            setLoading(true)
            const data = await getCart()
            if (isMounted.current){
                setCart.current(data)
                setLoading(false)                
            }
        }
        getCartData()
    }, [])

    const handleClick = () => {
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
                        <span>{cartData.items.length}</span>                           
                </Button>

                <div className="w-[350px] p-2 h-full flex flex-col">
                    <ul className="p-0 m-0 w-full h-full min-h-[100px] max-h-[210px] overflow-y-auto ">
                        {!loading &&
                        cartData.items.map(item => {
                            return (
                                <CartItem 
                                    key={item.option.id}
                                    imageUrl={item.product?.media?.images[0].image || undefined}
                                    name={item.product.name}
                                    price={item.price}
                                    size={item.option.size.size}
                                    quantity={item.quantity}
                                />                                
                            )
                        })}
                    </ul>

                    <div className="w-full p-2">
                        <div className="flex justify-between">
                            <h3 className="text-sm font-semibold">Total:</h3>
                            <span className="text-sm font-semibold text-red-400">{cartData.total_price}</span>
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
    imageUrl,
    name,
    price,
    size,
    quantity,
    ...props
}) => {
    return (
        <li className="m-1 p-2 rounded-2xl grid grid-cols-[80px_1fr] gap-2"
        >
            <div className="w-[80px] h-[80px] rounded-xl overflow-hidden">
                <img className="w-full h-full object-cover"
                    alt="asd" src={imageUrl}
                />
            </div>
            <div className="text-sm flex flex-col justify-between">
                <h3 className="text-sm m-0">{name || "Basas Workaday High Top"}</h3>
                <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] text-red-400 m-0 p-0 leading-[12px]" >{price || ""}</span>
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