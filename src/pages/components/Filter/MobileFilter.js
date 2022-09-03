import { useEffect } from "react"
import FilterCategories from "./FilterCategories"
import FilterGroup from "./FilterGroup"
import { Formik, Field } from "formik"
import Button from "../../../components/Button"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faX, faReply, faCheck, faExclamation} from '@fortawesome/free-solid-svg-icons'


const FilterMenuMobile = ({
    onSubmit, 
    categories, 
    validationRule,
    initialValues,
    handleClose, 
    options=[], 
    setValues,
    ...props
}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])
 

    const handleSubmit = (values) => {
        onSubmit(values)
        setValues(values)
        handleClose()
    }

    return ReactDOM.createPortal(
    <Formik 
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationRule}
    >  
        {(formikProps) => {
            const formChanged = JSON.stringify(formikProps.values) !== JSON.stringify(formikProps.initialValues)
            const hasError = Object.keys(formikProps.errors).length
            return (
                <form className="fixed flex flex-col z-40 bg-white shadow-md inset-0 p-4" 
                    onSubmit={formikProps.handleSubmit}   
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-3xl">Filter</h3>
                        <div>
                            <Button
                                className={` ${!formChanged && "hidden"} mr-7`}
                                type="button"
                                onClick={()=>{
                                    formikProps.resetForm()
                                }}
                            >
                                <FontAwesomeIcon icon={faReply} />
                            </Button>
                            <Button
                                type="button"
                                onClick={(e)=>{
                                    setValues(formikProps.values)
                                    handleClose(e)
                                }}
                            >
                                <FontAwesomeIcon icon={faX}/>
                            </Button>                            
                        </div>
   
                    </div>
                    <div className="h-full w-full p-1 overflow-y-auto">
                        <FilterCategories categories={categories} /> 
                        {options.map(item => {
                            return (
                                <FilterGroup key={item.id} item={item} />
                            )
                        })}
                    </div>

                    <div className="mt-8">
                        <div className="w-full grid grid-cols-2 gap-3 mb-4">
                            <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                                name="from" 
                                placeholder="From .... vnd"
                            />
                            <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                                name="to" 
                                placeholder="To ... vnd"
                            />
                        </div>
                        <Button className={`${hasError? "bg-red-500":"bg-blue-400 hover:bg-blue-500"} w-full rounded-2xl transition-all
                        pl-3 pr-3 pt-2 pb-2 font-semibold text-xl text-white text-center`}
                            type="submit"
                        >
                            {hasError?
                            <FontAwesomeIcon icon={faExclamation} />
                            :<FontAwesomeIcon icon={faCheck} />}
                        </Button>
                    </div>
                </form>
            )
        }}
    </Formik>
    , document.querySelector('body'))
}

export default FilterMenuMobile