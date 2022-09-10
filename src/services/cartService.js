import axios from "axios"


const getCart = () => {
    return axios.get('http://127.0.0.1:8000/cart/items/')
    .then(resp => resp.data)
}

const addToCart = (values) => {
    let formData = new FormData()
    for (let key in values) {
        console.log(typeof key)
        formData.append(key, values[key])
    }

    return axios.post('http://127.0.0.1:8000/cart/items/',
        formData,
    { "Content-Type": "multipart/form-data"})
    .then(resp => resp)
}

export default getCart
export {addToCart}