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

    return axios({
        method:'post', 
        url: 'http://127.0.0.1:8000/cart/items/', 
        data: formData,
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
            error: resp.response.data.error
        }
    })
}

export default getCart
export {addToCart}