import ReadMoreReadLess from "../../../../components/ReadMoreReadLess"
import { Formik } from "formik"
import Button from "../../../../components/Button"
import { useState } from "react"
import FormikCheckBox from "../../../../components/FormikCheckBox"
import * as Yup from "yup"
import { addToCart } from "../../../../services/cartService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import {toast } from "react-toastify"
import { useContext } from "react"
import { CartContext } from "../../../../cart"

const ProductForm = ({product}) => {
    return (
        <div className="flex flex-col gap-3"> 
            <h2 className=" text-3xl laptop:text-5xl font-semibold">{product.name}</h2>
            <div>
                <span className="text-red-400 text-2xl font-semibold">{product.price_range}</span>                
            </div>
            <div className="flex text-xl justify-between font-semibold">
                <span>Color:</span>
                <span>{product.color.name || ""}</span>
            </div>

            <div className="w-full transition-all">
                <ReadMoreReadLess>
                    Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.
                    Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.
                    Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.
                    Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.
                    Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:
                    Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.
                    Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.
                    Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.
                    Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác
                </ReadMoreReadLess>
            </div>
            <div>
                <Form 
                    productId = {product.id}
                    options={product.product_options}
                    genericProduct={product.generic_product}
                />
            </div>

        </div>
    )
}

export default ProductForm

const Form = ({options, productId, genericProduct}) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const optionTabs = ['size', 'quantity']
    const [isActiveTab, setIsActiveTab] = useState(0)
    const [price, setPrice] = useState("Choose your size")
    const [cartData, setCartData] = useContext(CartContext)
    const handleSizeBtnClick = () => {
        setIsActiveTab(0)
    }
    const handleQuantityBtnClick = () => {
        setIsActiveTab(1)
    }

    const quanityList = [...Array(15).keys()].map(i => i + 1)
    const handleFormikSubmit = (values) => {

        const submitForm = async () => {
            setIsSubmitting(true)
            const result = await addToCart(values)

            if (result.status === "error") {
                toast.error(result.error,{
                    position: toast.POSITION.TOP_RIGHT
                })
            } else {
                toast.success("Product was added to cart",{
                    position: toast.POSITION.TOP_RIGHT
                })
                setCartData(result.data)
            }

            setIsSubmitting(false)
        }
        submitForm()
    }

    return (
    <Formik 
        initialValues={{
            option_id: "",
            quantity: "",
        }}

        validationSchema={Yup.object({
            option_id: Yup.string()
                    .required(),
            quantity: Yup.string()
                    .required("Choose your quanity")
            
        })}
        onSubmit={handleFormikSubmit}

    >
        {(formikProps) => {
            return (
            <form className="w-full"
                onSubmit={formikProps.handleSubmit}
            >   
                <div className="mb-5">
                    <span className="text-gray-500 font-semibold mb-3 block">Color pattern</span>
                    <div>
                        <ul className="w-[80%] m-0 p-0 flex flex-wrap gap-5  ">
                            {genericProduct.specific_products?.map((product, index) => {
                                const color = product.color
                                return (
                                    <Button className="p-4 rounded-full "
                                        key={index}
                                        style={{backgroundColor: color.color_code}}
                                        to={`/product-detail/${product.id}`}
                                    > </Button>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="mb-5 min-h-[170px]">
                    <span className="text-gray-500 font-semibold mb-3 block">Size options</span>
                    <div className="flex gap-2 mb-4">
                        <Button className={`transition-all w-fit font-semibold pl-5 pr-5 pt-2 pb-2 rounded-lg border 
                                shadow-sm ${optionTabs[isActiveTab]==='size' ? "bg-black text-white":""}`}
                            type="button"
                            onClick={handleSizeBtnClick}
                        >
                            Size
                        </Button>

                        <Button className={`transition-all w-fit font-semibold pl-5 pr-5 pt-2 pb-2 rounded-lg border 
                                shadow-sm  ${optionTabs[isActiveTab]==='quantity' ? "bg-black text-white":""}`}
                            type="button"
                            onClick={handleQuantityBtnClick}
                        >
                            Quantity
                        </Button>
                    </div>
                    {optionTabs[isActiveTab]==='size' ?
                    <div className="">
                        <ul className="w-[80%] m-0 p-0 flex flex-wrap gap-5  ">
                            {options.map(option => (
                                <FormikCheckBox
                                    key={option.id}
                                    label={option.size.size} 
                                    name="option_id" 
                                    value={String(option.id)} 
                                    type="radio"
                                    primary
                                    onClick={() => {
                                        if (formikProps.values.option_id !== String(option.id)) {
                                            formikProps.setFieldValue("quantity", "", true)
                                            setPrice(option.price)
                                        }
                                    }}
                                />
                            ))}
                        </ul>
                    </div>                
                    :<div className="">
                        <ul className="w-[80%] m-0 p-0 flex flex-wrap gap-5  ">
                            {quanityList.map((item) => {
                                const isOutOfStock = item > (options.find(op => String(op.id) === formikProps.values.option_id)?.stock || 0)
                                return (
                                    <FormikCheckBox 
                                        key={item}
                                        label={item} 
                                        name="quantity" 
                                        value={String(item)} 
                                        type="radio"  
                                        disabled={isOutOfStock}
                                    />
                                )
                                })}
                        </ul>
                    </div>}
                    <span className="text-red-500 font-semibold block mt-3">
                        {formikProps.errors.quantity}
                    </span>
                </div>

                <div className="mb-5 flex justify-between items-baseline">
                    <span className="text-gray-500 font-semibold block">price:</span>
                    <span className="text-xl text-red-400 font-semibold">{price}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <Button className="p-3 hover:shadow-md bg-black rounded-xl text-white font-semibold"
                        type="submit"
                        disabled={isSubmitting}
                    >   
                        {isSubmitting ?
                            <FontAwesomeIcon className=" animate-spin" icon={faSpinner} />
                        :"Add to cart"}
                    </Button>

                    <Button className="p-3 hover:shadow-md bg-white border-2 border-black rounded-xl font-semibold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ?
                            <FontAwesomeIcon className=" animate-spin" icon={faSpinner} />
                        :"Checkout"}
                    </Button>                    
                </div>
            </form>
            )
        }}
    </Formik>
    )
}