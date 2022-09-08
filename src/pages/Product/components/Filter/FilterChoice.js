import { useField } from "formik"

const FilterChoice = ({primary, label, ...props}) => {

    const [fields] = useField(props)
    
    const style = primary? `transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 cursor-pointer
                    ${fields.checked ? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} rounded-3xl`
                :`${fields.checked? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} 
                transition-all pl-3 text-lg tablet:text-sm pr-3 pt-1 pb-1 border rounded-2xl cursor-pointer`
    return (
        <label className={style}
        >   
            {label || "Checkbox"}
            <input className="hidden"
                {...fields}
                {...props}
            />
       </label>    
    )
}

FilterChoice.defaultProps = {
    type: "checkbox"
}

export default FilterChoice