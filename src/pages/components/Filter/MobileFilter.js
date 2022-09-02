import { useEffect } from "react"
import FilterCategories from "./FilterCategories"
import FilterGroup from "./FilterGroup"
import { Formik, Form, Field } from "formik"
import Button from "../../../components/Button"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faX} from '@fortawesome/free-solid-svg-icons'


const FilterMenuMobile = ({handleSubmit, categories, handleClose, options=[], ...props}) => {

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    return ReactDOM.createPortal(
    <Formik 
            onSubmit={(values) => {
                alert(JSON.stringify(values))
                handleSubmit(values)
            }}
            initialValues={{
                from: "",
                to: ""
                // others
            }}
    >
        <Form className="fixed flex flex-col z-40 bg-white shadow-md inset-0 p-4"    
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-3xl">Filter</h3>
                <Button
                    type="button"
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faX}/>
                </Button>
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
                <Button className="w-full rounded-2xl bg-blue-400 hover:bg-blue-500 transition-all
                pl-3 pr-3 pt-2 pb-2 font-semibold text-xl text-white text-center"
                    type="submit"
                >
                    Done
                </Button>
            </div>
        </Form>
    </Formik>
    , document.querySelector('body'))
}

export default FilterMenuMobile