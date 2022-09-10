import { useField } from "formik"

const FormikCheckBox = ({
    primary,
    label, 
    rounded, 
    disabled, 
    onClick,
    ...props
}) => {

    const [fields] = useField(props)
    let style = ""
    
    if (disabled) {
        style = primary? `tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 cursor-pointer
                bg-gray-200 opacity-[0.5] rounded-3xl select-none`
                :`bg-gray-200 opacity-[0.5] transition-all pl-3 text-lg tablet:text-sm pr-3 pt-1 pb-1 border rounded-2xl cursor-pointer select-none`

        delete fields.onChange
        delete fields.onBlur
        
    } else {
        if (!rounded){
            style = primary? `transition-all tablet:text-sm font-semibold pt-2 pb-2 pl-6 pr-6 cursor-pointer
                            ${fields.checked ? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} rounded-3xl select-none`
                        :`${fields.checked? "bg-blue-400 text-white":"bg-gray-200 hover:bg-gray-300"} 
                        transition-all pl-3 text-lg tablet:text-sm pr-3 pt-1 pb-1 border rounded-2xl cursor-pointer select-none`        
        }
        else {
            style = `transition-all w-[45px] h-[45px] border border-black rounded-full shadow-md text-center leading-[45px]
                    ${fields.checked ? "bg-black text-white":""} cursor-pointer select-none`   
        }
    }

    return (
        <label className={style}
        >   
            {label || "Checkbox"}
            <input className="hidden"
                disabled={disabled}
                {...fields}
                {...props}
                onClick={onClick}
            />
       </label>    
    )
}

FormikCheckBox.defaultProps = {
    type: "checkbox"
}

export default FormikCheckBox