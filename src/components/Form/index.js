import {useForm} from 'react-hook-form'

const SignUpForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = data => {
        alert(JSON.stringify(data))
    }

    // useEffect(() => {
    //     console.log(textareaRef.current)
    // }, [])
    
    return (
        <form
            className='p-4 outline-blue-400 outline outline-2 flex flex-col gap-3 w-[350px]'
            onSubmit={handleSubmit(onSubmit)}
        >   
            <h3 className='text-blue-400 content-center m-auto' >Register</h3>
            <div className='flex flex-col gap-2' >
                <label className='text-gray-500 font-semibold text-sm' htmlFor='username'>Username</label>
                <input 
                    className='border outline-none p-2 '
                    id='username'
                    name="username"
                    {...register("username", {required: true, maxLength: 15, pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
                {/* <span>{errors.usernameRequired? "This field is required" :null}</span> */}
                {errors.username && errors.username.type === 'maxLength' &&
                <span className='text-red-500 text-sm ml-auto' >Only 15 characters or less</span>}
                {errors.username && errors.username.type === 'pattern' &&
                <span className='text-red-500 text-sm ml-auto' >Invalide email address</span>}

            </div>
            <div className='flex flex-col gap-2' >
                <label className='text-gray-500 font-semibold text-sm' htmlFor='gender'>Gender</label>
                <select id='gender' {...register("gender", )}>
                    <option value="female" >Female</option>
                    <option value="male" >Male</option>
                    <option value="other">Other</option>
                </select>                
            </div>

            <div className='flex flex-col gap-2' >
                <label className='text-gray-500 font-semibold text-sm' htmlFor='description'>description</label>
                <textarea 
                    className='border outline-none p-2 '
                    id='description'
                    name="description"
                    {...register(
                        "description", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                        }
                    )}
                />
                {errors?.description?.type === 'pattern' &&
                <span className='text-red-500 text-sm ml-auto' >Invalide pattern</span>}
            </div>

            <button className=' mt-3 mb-3 p-2 bg-blue-400 hover:bg-blue-500 transition-all text-white' type='submit'>Submit</button>
        </form>
    )
}

export default SignUpForm