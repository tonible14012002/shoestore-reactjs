import axios from "axios"



const getCatgories = () => {

    return new Promise (resolve => {
        setTimeout(() => {
            resolve([
                {
                    "id": 10,
                    "created_at": "2022-08-21T07:40:57.453616Z",
                    "updated_at": "2022-08-21T07:40:57.453616Z",
                    "name": "Footwear"
                },
                {
                    "id": 11,
                    "created_at": "2022-08-21T07:41:07.711441Z",
                    "updated_at": "2022-08-21T07:41:07.711441Z",
                    "name": "Accessories"
                },
                {
                    "id": 12,
                    "created_at": "2022-08-21T07:41:11.338585Z",
                    "updated_at": "2022-08-21T07:41:11.338585Z",
                    "name": "Top"
                }
            ])
        }, 200)
    })
}

const getAttributeClasses = () => {

    return new Promise (resolve => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "name": "Product Line",
                    "attributes": [
                        {
                            "id": 1,
                            "name": "Basas",
                            "value": "basas"
                        },
                        {
                            "id": 2,
                            "name": "Urbas",
                            "value": "urbas"
                        },
                        {
                            "id": 5,
                            "name": "Vintas",
                            "value": "vintas"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Shape",
                    "attributes": [
                        {
                            "id": 3,
                            "name": "High Top",
                            "value": "high-top"
                        },
                        {
                            "id": 4,
                            "name": "Low Top",
                            "value": "low-top"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Collections",
                    "attributes": [
                        {
                            "id": 6,
                            "name": "Workaday",
                            "value": "workaday"
                        },
                        {
                            "id": 7,
                            "name": "Doraemon",
                            "value": "doraemon"
                        }
                    ]
                }
            ])
        }, 200)
    })
}

const filterProducts = (categories="", attributes="", priceRange="") => {
    return axios.get(`http://127.0.0.1:8000/shop/product-list/?category=${categories}&attribute=${attributes}&range=${priceRange}`)
    .then(resp => resp.data)
}

const searchProduct = (q) => {
    return axios.get("http://127.0.0.1:8000/shop/product-list/", {
        params: {
            q: q || ""
        }
    })
    .then(resp => resp.data)
}


export {getCatgories, getAttributeClasses, filterProducts, searchProduct}
