import Button from "../../../../components/Button"
import useHover from "../../../../hooks/useHover"

const ProductItem = ({id, name, images, backgroundColor, priceRange , color, ...props}) => {
    const [isHovered, imgRef] = useHover()

    return (
        <Button className="Productitem w-full flex flex-col"
            to={`/product-detail/${id}`}
        >
            <div className={`w-full h-0 pb-[100%] overflow-hidden rounded-2xl ${true && backgroundColor} `}>
                <img className="w-full object-cover"
                ref={imgRef}
                src={isHovered ? images[0].image : images[1].image || "pro_AV00158_2-500x500 - Edited.png"} alt={name} />
            </div>
            <h4 className="mt-4 font-semibold mb-1 text-base tablet:text-sm">
                <span className="block text-left"
                >{name || "Product name"}</span>
            </h4>
            <span className="text-red-500 text-lg mb-1 tablet:text-sm">{priceRange || "Product price"}</span>
            <span className="pl-3 pr-3 pt-1 pb-1 mb-3 bg-neutral-200 
                     text-sm font-semibold text-center w-fit rounded-xl"        
            >
                {color || "White"}
            </span>
            {/* <Button className="pl-3 pr-3 pt-2 pb-2 rounded-xl text-lg bg-neutral-200 text-center transition-all"
                to={`/product-detail/${id}`}
            >
                Buy now
            </Button> */}
        </Button>
    )
}

export default ProductItem