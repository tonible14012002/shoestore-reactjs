import { addToCart } from "../../../../services/cartService"
import { removeFromCart } from "../../../../services/cartService"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify"
import { Formik } from "formik"

const CartItem = ({
    setLoading,
    setCartData,
    currentOption,
    name,
    quantity,
    productID,
    productOptions,
    images,
    colorName,
    colorCode,
    price,
    onRemove,
    ...props
}) => {
    const handleSubmit = (values) => {
        const onCartChange = async () => {
            setLoading(true)
            // remove prev option
            if (values.to_remove_option_id) {
                const result = await removeFromCart(values.to_remove_option_id)
                if (result.status === "error"){
                    toast.error(result.error,{
                        position: toast.POSITION.TOP_RIGHT
                    })
                    console.log(result.data)
                    setCartData(result.data)
                    setLoading(false)
                    return
                }
            }
            // add new option to cart
            const result = await addToCart(values)
            if (result.status === "error") {
                toast.error(result.error,{
                    position: toast.POSITION.TOP_RIGHT
                })
            }

            setCartData(result.data)
            setLoading(false)
        }
        onCartChange()
    }

    const quantityList = Array(
        (currentOption.stock < 15) ? 
        currentOption.stock:
        15
    ).fill(null).map((item,index)=> index+1)

    return (
        <>
            <div className="col-start-1">
                <div className="w-[100px] h-[100px] float-left rounded-xl overflow-hidden">
                    <img className=" w-full object-cover"
                        src={images[0].image || ""} alt={name} 
                    />
                </div>
                <div className="w-[170px] h-full float-right pl-4 flex flex-col justify-center">
                    <Button className="font-semibold"
                        to={`/product-detail/${productID}`}
                    >
                        {name}
                    </Button>
                    <span className="text-sm text-neutral-500 font-semibold">{colorName}</span>         
                    <span className="text-sm text-neutral-500">{currentOption.price}</span>         
                </div>

            </div>
         
            <Formik // Formik value reset to new cart on every submit
                initialValues={{
                    option_id: String(currentOption.id),
                    quantity: String(quantity),
                    override_quantity: true,
                    to_remove_option_id: ""
                }}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {formikProps => {
                    return (
                        <form className="grid grid-cols-[1fr_1fr_1fr_50px]"
                            onSubmit={formikProps.handleSubmit}
                            // submit on every change => setCart => rerender form => assign new initial value
                        >
                            <div className="flex items-center justify-center">
                                <select className="block text-neutral-500 text-sm font-semibold" 
                                    value={formikProps.initialValues.option_id}
                                    as="select"
                                    name="option_id"
                                    onChange={(e)=> {
                                        formikProps.setFieldValue("to_remove_option_id", formikProps.values.option_id)
                                        formikProps.setFieldValue("override_quantity", false)
                                        formikProps.handleChange(e)
                                        formikProps.submitForm()
                                    }}
                                    onBlur={formikProps.handleBlur}
                                >
                                    {productOptions.map(op => {
                                        return (
                                            <option key={op.id} value={op.id} >{op.size.size + " id:" + op.id}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="flex items-center justify-center">
                                    <select className="block text-neutral-500 text-sm font-semibold" 
                                        as="select"
                                        name="quantity"
                                        value={formikProps.initialValues.quantity}
                                        onBlur={formikProps.handleBlur}
                                        onChange={(e) => {
                                            formikProps.handleChange(e)
                                            formikProps.submitForm()
                                        }}
                                    >
                                        {quantityList.map((item) => {
                                            return (
                                                <option key={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                            </div>
                            <div className="text-center leading-[100px] text-red-400 font-semibold">{price}</div>
                            
                            <Button className="text-sm"
                                type="button"
                                value={formikProps.initialValues.option_id}
                                onClick={onRemove}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>                
                        </form>
                    )
                }
            }
            </Formik>

        </>
    )
}

export default CartItem