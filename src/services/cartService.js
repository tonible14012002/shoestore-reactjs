import axios from "axios"


const getCart = () => {
    return axios.get('http://127.0.0.1:8000/cart/items/',{
        withCredentials: true
    })
    .then(resp => resp.data)
}

const addToCart = (values) => {
    let formData = new FormData()
    for (let key in values) {
        formData.append(key, values[key])
    }

    return axios({
        method:'post', 
        url: 'http://127.0.0.1:8000/cart/items/', 
        data: formData,
        withCredentials: true
    })
    .then(resp => {
        return {
            data: resp.data,
            status: "success"
        }
    })
    .catch(resp => {

        return {
            status: "error",
            error: resp.response.data.error,
            data: resp.response.data.data
        }
    })
}

const removeFromCart = (optionId) => {
    return axios.delete(`http://127.0.0.1:8000/cart/items/${optionId}/`, {
        withCredentials: true,
    })
    .then(resp => ({
        data: resp.data,
        status: "success"
    }))
    .catch(resp => ({
        status: "error",
        error: resp.response.data.error,
        data: resp.response.data.data
    }))
}

export default getCart
export {addToCart, removeFromCart}