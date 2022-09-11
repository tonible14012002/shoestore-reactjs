import { useState } from "react";
import CartContext from "./Context";

const CartProvider = ({children}) => {
    const [cartData, setCartData] = useState({
        items:[],
        total_price:""
    })

    return (
        <CartContext.Provider value={[cartData, setCartData] } >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider