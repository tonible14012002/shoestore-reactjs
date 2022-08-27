
import { faGamepad, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as Yup from 'yup'
const Modal = ({open=false, handleClose=() => {}}) => {
    
    const modalRef = useRef()
    useEffect(() => {
        if (!modalRef.current) return
        modalRef.current.style.transform = 'translateY(20%)'
        modalRef.current.style.opacity = 0
        const timerId = setTimeout(() => {
            modalRef.current.style.transform = 'translateY(0)'
            modalRef.current.style.opacity = 1
        },10);
        return () => {clearTimeout(timerId)}
    }, [open])


    if (typeof document === "undefined" || !open) return null
    return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
        <div className="overlay absolute inset-0 bg-black z-20 opacity-60" ></div>
        <div className="z-20 transition-all" ref={modalRef} >
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                    .required("This field is required!"),
                    password: Yup.string()
                    .required("This field is required!")
                    .min(10, "Password must be 10 characters or more!")
                })}
                onSubmit={(values) => {alert(JSON.stringify(values))}}
            >
                <Form className="p-5 w-[400px] bg-white flex flex-col gap-2 relative rounded-xl">
                    <h3 className="m-auto mb-3">Welcome Back!</h3>
                    <div className="flex items-center justify-between gap-2">
                        <a href="/" className="w-full p-2 bg-blue-500 hover:bg-blue-600 h-full no-underline
                            flex items-center justify-center gap-2 rounded transition-all"
                        >
                            <FontAwesomeIcon className="text-white text-xl" icon={faGamepad} />
                            <span className="text-white" >Sign in with google</span>
                        </a>
                        <a href="/" className="bg-gray-600 h-full rounded no-underline
                            p-2 transition-all hover:bg-gray-700"
                        >
                            <FontAwesomeIcon className="text-white text-xl" icon={faGamepad} />
                        </a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-600" htmlFor="username" >Username</label>
                        <Field  className="p-2 outline-none bg-gray-200" id="username"
                            name="username"
                        />
                        <span className="error text-sm text-red-600 ml-auto"><ErrorMessage name="username"/></span>
                    </div>   
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-600" htmlFor="password">Password</label>
                        <Field  className="p-2 outline-none bg-gray-200" id="password"
                            name="password"
                            type="password"
                        />
                        <span className="error text-sm text-red-600 ml-auto"><ErrorMessage name="password" /></span>
                    </div>   
                    <button type="submit"
                        className="p-3 mt-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all"
                    >Submit
                    </button>  

                    <span className="absolute top-0 right-0 bg-white hover: hover:cursor-pointer shadow-md w-[30px] h-[30px]
                        flex items-center justify-center rounded-[50%] translate-x-[50%] translate-y-[-50%]" 
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </span>
                </Form>
            </Formik>

        </div>
    </div>,
    document.querySelector("body"))
}


export default Modal