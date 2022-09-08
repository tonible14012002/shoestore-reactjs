import axios from "axios"

const getCart = () => {
    return axios.get('http://127.0.0.1:8000/cart/items/')
    .then(resp => resp.data)
}

export default getCart