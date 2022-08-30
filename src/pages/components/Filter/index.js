import Button from "../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faX, faCheck} from "@fortawesome/free-solid-svg-icons"
import useSmallSreen from '../../../hooks/useSmallScreen'
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react"
import useModal from "../../../hooks/useModal";
import {getCatgories, getAttributeClasses } from "../../../services/filterService";
import { Formik, Form, Field, useField } from "formik";

const Filter = () => {

    const categories = useRef()
    const filterOptions = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const isMobile = useSmallSreen(640)
    useEffect(() => {
        const getCate = async () => {
            setIsLoading(true)
            categories.current = await getCatgories()
            filterOptions.current = await getAttributeClasses()
            setIsLoading(false)
        }
        getCate()
    }, [])

    const {
        show,
        handleClick, 
        handleClose 
    } = useModal()

    return (
        <Formik
            onSubmit={(values) => {alert(JSON.stringify(values))}}
            initialValues={{}}
        >
            <Form className="pl-3 pr-3 sticky top-0 bg-white mb-8">
                <div className="w-full h-[70px] flex items-center">
                    <div className="w-full h-full overflow-x-auto flex gap-3 items-center mr-4">
                        {isLoading && <>
                            <FilterChoiceSkeleton /> 
                            <FilterChoiceSkeleton />
                            <FilterChoiceSkeleton />
                        </>}
                        {!isLoading && 
                        <>
                            <FilterChoice 
                                primary
                                label="All"
                                type="checkbox"
                                name="category"
                                value="all"
                            />
                            {categories.current.map((item, index) => (
                            <FilterChoice
                                primary
                                key={item.id}
                                label={item.name}
                                type="checkbox"
                                name="category"
                                value={item.name}
                            />
                        ))}
                        </>}
                    </div>
                    <Button className="transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 
                            cursor-pointer text-white hover:bg-blue-400 rounded-3xl mr-2 bg-blue-300" 
                    >
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    {!isLoading &&
                    <Button className={`w-[50px] h-[50px] ${show&&"rotate-[10deg]"}`}
                        type="button"
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faFilter}/>
                    </Button>}
                </div>

                {show && !isLoading &&
                (isMobile? <FilterMenuMobile 
                            handleClose={handleClose} 
                            options={filterOptions.current} 
                        />
                        : <FilterMenuLaptop
                            handleClose={handleClose} 
                            options={filterOptions.current} 
                        />)}
            </Form>
            
        </Formik>
    )
}

const FilterMenuMobile = ({handleClose, options=[], ...props}) => {
    

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    return ReactDOM.createPortal(
    <Formik 
        initialValues={{

        }}
        onSubmit={(values => {alert(JSON.stringify(values))})}
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
                {options.map(item => {
                    return (
                        <FilterGroup key={item.name} item={item} />
                    )
                })}
            </div>

            <div className="mt-8">
                <div className="w-full grid grid-cols-2 gap-3 mb-4">
                    <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                        name="lower" 
                        placeholder="From .... vnd"
                    />
                    <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                        name="upper" 
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

const FilterGroup = ({item, ...props}) => {
    return (
        <div key={item.id} className="mb-4">
                            <h4 className="mb-3 text-xl tablet:text-base">{item.name}</h4>
                            <div className="flex flex-wrap gap-3">
                                {item.attributes.map(attr => {
                                    return (
                                        <FilterChoice 
                                            key={attr.id}
                                            label={attr.name}
                                            name={item.name}
                                            value={attr.name}
                                        />
                                    )
                                })}
                            </div>
                        </div>
    )
}

const FilterMenuLaptop = ({handleClose, options=[], ...props}) => {
    return (
        <div className="absolute pt-3 pb-3 pl-5 pr-5 top-[70px] left-0 right-0 rounded-b-2xl bg-white shadow-md w-full">
            <div className="grid grid-cols-2">
                {options.map(item => {
                        return (
                            <div className="mb-4">
                            <h4 className="mb-3 text-xl tablet:text-base">{item.name}</h4>
                            <div className="flex flex-wrap gap-3">
                                {item.attributes.map(attr => {
                                    return (
                                        <FilterChoice 
                                            key={attr.id}
                                            label={attr.name}
                                            name={item.name}
                                            value={attr.name}
                                        />
                                    )
                                })}
                            </div>
                            </div>
                        )
                    })}
                <div className="mb-4">
                <h4 className="mb-3 text-xl tablet:text-base">Price range</h4>
                <div className="w-full grid grid-cols-2 gap-3 mb-4">
                    <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                        name="lower" 
                        placeHolder="From .... vnd"
                    />
                    <Field className="pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                        name="upper" 
                        placeHolder="To ... vnd"
                    />
                </div>
                </div>
            </div>
        </div>
    )
}

const FilterChoiceSkeleton = () => {
    return (
        <div className="transition-all text-lg tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 bg-gray-200 animate-pulse rounded-3xl text-transparent"
        >
            temp
       </div>    
    )
}

const FilterChoice = ({primary, label, name, value, ...props}) => {

    const [fields, meta] = useField(name)

    const style = primary? `transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 cursor-pointer
                    ${fields.value?.includes(value) ? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} rounded-3xl`
                :`${fields.value?.includes(value)? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} 
                transition-all pl-3 text-lg tablet:text-sm pr-3 pt-1 pb-1 border rounded-2xl cursor-pointer`
    console.log(fields.value)
    return (
        <label className={style}
        >   
            {label || "Checkbox"}
            <input type="checkbox" className="hidden"
                {...fields}
                name={name}
                value={value}
                {...props}
            />
       </label>    
    )
}

export default Filter
