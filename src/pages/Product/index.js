import { useCallback, useEffect, useRef, useState } from "react"
import * as productServices from "../../services/productServices"

import Filter from "./components/Filter"
import ProductItem from "./components/ProductItem"
import ItemSkeleton from "./components/ProductSkeleton"

const Product = () => {

    const [query, setQuery] = useState({
        category: "",
        attribute: "",
        range: ""
    })

    const handleSetNewQuery = useCallback((newQuery) => {
        setQuery(newQuery)
    }, [])

    const productListRef = useRef()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const filterProduct = async () => {
            setLoading(true)
            console.log(query)
            const newProducts = await productServices.filterProducts(
                query.category,
                query.attribute,
                query.range
            )

            productListRef.current = newProducts
            setLoading(false)
            }
        filterProduct()
    }, [query])


    return (
        <>
            <Filter 
                setNewQuery={handleSetNewQuery}
            />
            <div className="product-list w-full h-full">
                <div className="product-container w-full m-0 p-0 gap-[40px]
                        grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 min-h-[410px]">
                    {loading && <>
                        <ItemSkeleton />
                        <ItemSkeleton />
                        <ItemSkeleton />
                        <ItemSkeleton />
                    </>}
                    {!loading && 
                    productListRef.current.map((item, index) => {
                        return (
                            <ProductItem key={item.id} 
                                backgroundColor={item.color_code}
                                name={item.name}
                                priceRange={item.price_range}
                                images={item.media?.images}
                                color={item.color?.name || ""}
                            />
                        )
                    })
                    }
                </div>
                
            </div>
        </>
    )
}


export default Product