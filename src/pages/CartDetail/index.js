import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { CartContext } from "../../cart"
import Button from "../../components/Button"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { removeFromCart } from "../../services/cartService"
import { useCallback } from "react"
import { toast } from "react-toastify"
import CartDetailSkeleton from "./components/Skeleton/CartDetailSkeleton"
import CartItem from "./components/CartItem"


const CartDetail = () => {

    const [cartData, setCartData] = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const handleSetCartData = useCallback((newData) => {
        setCartData(newData)
    }, [setCartData])

    const handleSetLoading = useCallback((value) => {
        setLoading(value)
    }, [])

    const handleRemove = useCallback((e) => {
        e.preventDefault()
        const handleRemove = async () => {
            setLoading(true)
            const result = await removeFromCart(e.currentTarget.value)
            if (result.status === "error"){
                toast.error(result.error)
            }
            setCartData(result.data)
            setLoading(false)
        }
        handleRemove()
    }, [setCartData])


    return (
        <div className="">
            <div className="header mb-6">
                <h3 className="text-3xl font-semibold mb-1">Shopping Cart</h3>
                <Button className=""
                    to="/product-list/"
                >
                    <span className="mr-2">
                        <FontAwesomeIcon className="text-sm" icon={faArrowLeft}/>
                    </span>
                    <span>
                        Continue Shopping
                    </span>
                </Button>
            </div>
            <div className="laptop:grid laptop:grid-cols-[5fr_2fr] laptop:gap-8 flex flex-cols ">
                {loading?
                <CartDetailSkeleton 
                    itemCount={cartData.items?.length || 3}
                />:
                <div className="rounded-xl w-full gap-x-2 gap-y-4 grid grid-cols-[270px_1fr]"
                >
                    <div className="col-start-2 grid grid-cols-[1fr_1fr_1fr_50px]">
                        <div className="p-2 font-semibold text-sm text-center ">Size</div>
                        <div className="p-2 font-semibold text-sm text-center ">Quantity</div>
                        <div className="p-2 font-semibold text-sm text-center ">Toltal SAR</div>                        
                    </div>

                    {cartData.items?.map(item => (
                        <CartItem 
                            key={item.option.id}
                            productID={item.product.id}
                            currentOption={item.option}
                            name={item.product.name}
                            productOptions={item.product.product_options}
                            colorName={item.product.color.name}
                            colorCode={item.product.color.color_code}
                            quantity={item.quantity}
                            images={item.product.media.images}
                            price={item.price}
                            setLoading={handleSetLoading}
                            setCartData={handleSetCartData}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>}

                <div className="bg-neutral-200 rounded-xl">
                </div>
            </div>

        </div>
    )
}

export default CartDetail



