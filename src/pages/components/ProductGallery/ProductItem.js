import Button from "../../../components/Button"

const ProductItem = ({name, image, backgroundColor, price, color, ...props}) => {
    return (
        <div className="Productitem w-full flex flex-col">
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

export default ProductItem