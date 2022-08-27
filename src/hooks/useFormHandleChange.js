import { useState } from "react"




const useFormHandleChange = (initialValue) => {
    

    const [formInput, setFormInput] = useState({...initialValue})

    const handleInputChange = (e) => {
        if (e.target.type === 'checkbox'){
            setFormInput({
                ...formInput,
                [e.target.name] : e.target.checked
            })

            return
        }

        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    return [formInput, handleInputChange]
}

export default useFormHandleChange