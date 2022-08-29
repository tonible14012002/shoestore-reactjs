import { useEffect, useRef, useState } from "react"
import Button from './Button'
import getProducts from "../../services/productService"


const ProductList = () => {

    const productListRef = useRef()
    const [loading, setLoading] = useState(true)
    const bgColorsRef = useRef(['bg-gradient-to-r from-cyan-500 to-blue-500' ,'bg-emerald-300', 'bg-orange-300' , 'bg-red-200', 'bg-yellow-200', 'bg-green-300'])

    useEffect(()=> {
        const getData = async () => {
            setLoading(true)
            const data = await getProducts()
            productListRef.current = data
            setLoading(false)
        }

        getData()
    }, [])



    return (
        <div className="product-list w-full h-full">
            <div className="product-container w-full m-0 p-0 gap-[40px]
                    grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
                {loading && <>
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                    <ItemSkeleton />
                </>}
                {!loading && 
                productListRef.current.map((item, index) => {
                    const color = bgColorsRef.current[index % bgColorsRef.current.length]
                    return (
                        <Item key={item.productID} 
                            backgroundColor={color}
                            name={item.productName}
                            price={item.productPrice}
                            image={item.media.link[0]}
                            color={item.productColor}
                        />
                    )
                })
                }
            </div>
            
        </div>
    )
}

const Item = ({name, image, backgroundColor, price, color, ...props}) => {
    return (
        <div className="item w-full flex flex-col">
            <div className={`w-full h-0 pb-[100%] overflow-hidden rounded-2xl ${true && backgroundColor}`}>
                <img className="w-full object-cover"
                src={image || "pro_AV00158_2-500x500 - Edited.png"} alt="asd" />
            </div>
            <h4 className="mt-4 font-semibold mb-1 text-base tablet:text-sm">
                <Button>{name || "Product name"}</Button>
            </h4>
            <span className="text-red-500 text-lg mb-1 tablet:text-sm">{price || "Product price"}</span>
            <span className="pl-3 pr-3 pt-1 pb-1 mb-3 bg-gradient-to-r from-teal-300 to-blue-300
                     text-sm font-semibold text-center w-fit rounded-3xl text-white"
            >
                {color || "White"}
            </span>
            <Button className="pl-3 pr-3 pt-2 pb-2 rounded-3xl text-lg bg-gray-200 hover:bg-gray-300"
            >Buy now
            </Button>
        </div>
    )
}

const ItemSkeleton = () => {

    return (
        <div className="item w-full flex flex-col animate-pulse">
            <div className={`w-full h-0 pb-[100%] overflow-hidden rounded-2xl bg-gray-200`}>
            </div>
            <h4 className="text-transparent mt-4 font-semibold mb-1 text-base tablet:text-sm bg-gray-200 w-fit rounded-2xl">This is temp text</h4>
            <span className="text-transparent text-red-500 text-lg mb-1 tablet:text-sm bg-gray-200 w-fit rounded-2xl">temp text</span>
            <span className="text-transparent pl-3 pr-3 pt-1 pb-1 mb-3 bg-gradient-to-r bg-gray-200
                     text-sm font-semibold text-center w-fit rounded-3xl"
            >
                temp text
            </span>
            <div className="text-transparent pl-3 pr-3 pt-2 pb-2 rounded-3xl text-lg bg-gray-200"
            >
                temp text
            </div>
        </div>
    )
}

export default ProductList