import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { retrieveProduct } from "../../services/productServices"
import { useRef } from "react"
import { useState } from "react"
import ProductGalery from "./components/ProductGalery"
import ProductForm from "./components/ProductAddForm"
import ProductGalerySkeleton from "./components/Skeleton/ProductGalerySkeleton"
import ProductDetailSkeleton from "./components/Skeleton/ProductAddFormSkeleton"

const ProductDetail = () => {

    const {id} = useParams()
    const productDataRef = useRef()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProductDetail = async () => {
            setLoading(true)
            productDataRef.current = await retrieveProduct(id)
            setLoading(false)
        }
        getProductDetail()
    }, [id])

    return (
        <div className="w-full flex flex-col">
            <ul className="p-0 m-0 flex text-md text-gray-600 pt-2 pb-2 mb-3">
                <li className="border-r pr-2 pl-2 " >Footwear</li>
                <li className="border-r pr-2 pl-2 " >Basas</li>
                <li className="border-r pr-2 pl-2 " >High Top</li>
                <li className="border-r pr-2 pl-2 " >Workaday</li>
            </ul>
            <div className="w-full flex flex-col gap-2 laptop:gap-0 laptop:grid laptop:grid-cols-[3fr_2fr]">
                <div className="w-full h-fit">
                    {loading || !productDataRef.current ? 
                    <ProductGalerySkeleton />
                    :<ProductGalery 
                        loading={loading}
                        images={productDataRef.current?.media?.images || []}
                    />}
                </div>

                <div className="w-full">
                    {loading || !productDataRef.current ? 
                    <ProductDetailSkeleton />
                    :<ProductForm 
                        product={productDataRef.current}
                    />}
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail