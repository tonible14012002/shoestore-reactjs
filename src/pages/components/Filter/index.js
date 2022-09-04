import Button from "../../../components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faCheck, faFilterCircleXmark, faExclamation, } from "@fortawesome/free-solid-svg-icons"
import useSmallSreen from '../../../hooks/useSmallScreen'
import { useEffect, useRef, useState } from "react"
import useModal from "../../../hooks/useModal";
import * as productServices from "../../../services/productServices";
import { Formik, ErrorMessage, Field} from "formik";
import FilterGroup from "./FilterGroup"
import FilterChoiceSkeleton from "./FilterChoiceSkeleton"
import FilterChoice from "./FilterChoice"
import FilterMenuMobile from "./MobileFilter"
import * as Yup from 'yup';

const Filter = ({setNewQuery}) => {

    const categories = useRef()
    const filterOptions = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const isMobile = useSmallSreen(640)

    useEffect(() => {
        const getCate = async () => {
            setIsLoading(true)
            categories.current = await productServices.getCatgories()
            filterOptions.current = await productServices.getAttributeClasses()
            setIsLoading(false)
        }
        getCate()
    }, [])

    const {
        show,
        handleClick, 
        handleClose 
    } = useModal()

    const handleSubmit = (values) => {

        // handle category query
        var cateQuery = ""
        if (values.hasOwnProperty("category")) {
            cateQuery = values.category.join(',')
        }

        // handle attribute query
        const attrClasses = Object.keys(values)
                        .filter((key) => (
                            Array.isArray(values[key])
                            && values[key].length 
                            && key !== "category")
                            )
        const attrQuery= attrClasses
                        .map(key => values[key].join(','))
                        .join('^')     

        //handle range query
        if (!values.from) {
            values.from = "0"
        }
        const rangeQuery = values.from + (values.to? ("-"+values.to): "")
        setNewQuery({
            category: cateQuery,
            attribute: attrQuery,
            range: rangeQuery
        })
    }

    var initValues={from:"", to: "", category: [    ]}
    filterOptions.current?.forEach(op => initValues[op.name]= [])

    const validationSchema = Yup.object({
                from: Yup.number()
                    .typeError("only numbers are allowed")
                    .nullable()
                    .min(0),
                to: Yup.number()
                    .typeError("only numbers are allowed")
                    .nullable()
                    .when('from',{
                            is: (from)=>from,
                            then: Yup.number().min(Yup.ref("from"))
                        })
            })


    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={initValues}
            validationSchema={validationSchema}
        >
        {(formikProps) => {
            const hasError = Object.keys(formikProps.errors).length !== 0
            const formChanged = JSON.stringify(formikProps.values) !== JSON.stringify(formikProps.initialValues)
            return (
                <form className="pl-3 pr-3 sticky z-30 top-0 bg-white mb-8"
                    onSubmit={formikProps.handleSubmit}
                >
                    <div className="w-full h-[70px] flex items-center">
                        <div className="w-full h-full overflow-x-auto flex gap-3 items-center mr-4">
                            {isLoading && <>
                                <FilterChoiceSkeleton /> 
                                <FilterChoiceSkeleton />
                            </>}
                            {!isLoading && 
                            <>
                                <Button className="`transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 
                                    cursor-pointer bg-pink-300 hover:bg-pink-400 text-white rounded-3xl flex gap-1 items-center"
                                    type="button"
                                    onClick={() => {formikProps.resetForm(); formikProps.handleSubmit()}}
                                >
                                    <span>All</span><FontAwesomeIcon icon={faFilterCircleXmark} />
                                </Button>
                                {!isMobile && categories.current.map((item, index) => (
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
                        <Button className={`transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 
                                cursor-pointer text-white rounded-3xl mr-2 
                                ${hasError?"bg-red-400 hover:bg-red-500"
                                :formChanged? "bg-blue-400 hover:bg-blue-500"
                                :"bg-gray-400"}`}
                                type="submit"
                        >   
                            {hasError?
                            <FontAwesomeIcon icon={faExclamation} />
                            :<FontAwesomeIcon icon={faCheck} />}
                        </Button>
                        {!isLoading &&
                        <Button className={`w-[50px] h-[50px] ${show&&"rotate-[10deg]"} ${hasError?"text-red-400":"text-blue-400"}`}
                            type="button"
                            onClick={handleClick}
                        >
                            <FontAwesomeIcon icon={faFilter}/>
                        </Button>}
                    </div>

                    {show && !isLoading &&
                    (isMobile? <FilterMenuMobile 
                                onSubmit={handleSubmit}
                                handleClose={handleClose}
                                categories={categories.current}
                                options={filterOptions.current} 
                                validationRule={validationSchema}
                                initialValues={formikProps.values}
                                setValues={formikProps.setValues}
                            />
                            :<FilterMenuLaptop
                                handleClose={handleClose} 
                                options={filterOptions.current} 
                            />)}
                </form>
            )
        }}
        </Formik>
    )
}

const FilterMenuLaptop = ({handleClose, options=[], ...props}) => {
    return (
        <div className="absolute pt-3 pb-3 pl-5 pr-5 top-[70px] left-0 right-0 rounded-b-2xl bg-white shadow-md w-full">
            <div className="grid grid-cols-2 laptop:grid-cols-3">
                {options.map(item => {
                        return (
                            <FilterGroup key={item.id} item={item} />
                        )
                    })}
                <div className="mb-4">
                <h4 className="mb-3 text-xl tablet:text-base">Price range</h4>
                <div className="w-full grid grid-cols-2 gap-3 mb-3">
                    <div className="">
                        <Field className="w-full pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                            name="from" 
                            placeholder="From .... vnd"
                        />    
                        <span className="text-sm text-red-500"><ErrorMessage name="from" /></span>                    
                    </div>
                    <div className="">
                        <Field className="w-full pl-3 pr-3 pt-2 pb-2 outline-none border rounded-2xl"
                            name="to" 
                            placeholder="To ... vnd"
                        />                        
                        <span className="text-sm text-red-500"><ErrorMessage name="to" /></span> 
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
