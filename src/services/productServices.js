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
    console.log(categories, attributes, priceRange)
    return axios.get(`http://127.0.0.1:8000/shop/product-list/?category=${categories}&attribute=${attributes}&range=${priceRange}`)
    .then(resp => resp.data)
}

const getProducts =  () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    "id": 14,
                    "color": {
                        "id": 3,
                        "name": "White",
                        "color_code": "#ffff"
                    },
                    "attributes": [
                        {
                            "id": 4,
                            "name": "Low Top",
                            "value": "low-top"
                        },
                        {
                            "id": 5,
                            "name": "Vintas",
                            "value": "vintas"
                        },
                        {
                            "id": 7,
                            "name": "Doraemon",
                            "value": "doraemon"
                        }
                    ],
                    "created_at": "2022-08-25T01:25:31.412061Z",
                    "updated_at": "2022-08-25T01:25:31.443616Z",
                    "name": "Vintas Doraemon Low Top",
                    "order_type": "ready",
                    "attributes_str": "{\"color\": \"White\", \"attributes\": \"low-top,vintas,Doraemon\", \"sizes\": \"s35,s36,s37\"}",
                    "generic_product": 7
                },
                {
                    "id": 13,
                    "color": {
                        "id": 3,
                        "name": "White",
                        "color_code": "#ffff"
                    },
                    "attributes": [
                        {
                            "id": 1,
                            "name": "Basas",
                            "value": "basas"
                        },
                        {
                            "id": 3,
                            "name": "High Top",
                            "value": "high-top"
                        },
                        {
                            "id": 6,
                            "name": "Workaday",
                            "value": "workaday"
                        }
                    ],
                    "created_at": "2022-08-24T14:04:14.215439Z",
                    "updated_at": "2022-08-25T02:39:15.722664Z",
                    "name": "Basas Workaday High Top",
                    "order_type": "ready",
                    "attributes_str": "{\"attributes\": \"basas,high-top,Workaday\", \"sizes\": \"s35,s36,s38\", \"color\": \"White\"}",
                    "generic_product": 5
                },
                {
                    "id": 12,
                    "color": {
                        "id": 2,
                        "name": "EverGreen",
                        "color_code": "#1ba675"
                    },
                    "attributes": [
                        {
                            "id": 2,
                            "name": "Urbas",
                            "value": "urbas"
                        },
                        {
                            "id": 3,
                            "name": "High Top",
                            "value": "high-top"
                        },
                        {
                            "id": 7,
                            "name": "Doraemon",
                            "value": "doraemon"
                        }
                    ],
                    "created_at": "2022-08-24T14:03:14.749340Z",
                    "updated_at": "2022-08-25T01:12:55.105277Z",
                    "name": "Urbas Doraemon High Top",
                    "order_type": "ready",
                    "attributes_str": "{\"attributes\": \"urbas,high-top,Doraemon\", \"sizes\": \"s35,s36\", \"color\": \"EverGreen\"}",
                    "generic_product": 5
                },
                {
                    "id": 11,
                    "color": {
                        "id": 2,
                        "name": "EverGreen",
                        "color_code": "#1ba675"
                    },
                    "attributes": [
                        {
                            "id": 1,
                            "name": "Basas",
                            "value": "basas"
                        },
                        {
                            "id": 3,
                            "name": "High Top",
                            "value": "high-top"
                        },
                        {
                            "id": 6,
                            "name": "Workaday",
                            "value": "workaday"
                        }
                    ],
                    "created_at": "2022-08-24T14:02:38.308522Z",
                    "updated_at": "2022-08-30T03:43:34.274315Z",
                    "name": "Basas Workaday High Top",
                    "order_type": "ready",
                    "attributes_str": "{\"attributes\": \"basas,high-top,Workaday\", \"sizes\": \"s39,s40,s41\", \"color\": \"EverGreen\"}",
                    "generic_product": 6
                },
                {
                    "id": 10,
                    "color": {
                        "id": 1,
                        "name": "Blue",
                        "color_code": null
                    },
                    "attributes": [
                        {
                            "id": 1,
                            "name": "Basas",
                            "value": "basas"
                        },
                        {
                            "id": 4,
                            "name": "Low Top",
                            "value": "low-top"
                        },
                        {
                            "id": 7,
                            "name": "Doraemon",
                            "value": "doraemon"
                        }
                    ],
                    "created_at": "2022-08-24T14:02:02.449635Z",
                    "updated_at": "2022-08-25T01:13:04.604473Z",
                    "name": "Urbas Doraemon Low Top",
                    "order_type": "ready",
                    "attributes_str": "{\"attributes\": \"basas,low-top,Doraemon\", \"sizes\": \"s40,s41,s44\", \"color\": \"Blue\"}",
                    "generic_product": 6
                },
                {
                    "id": 9,
                    "color": {
                        "id": 1,
                        "name": "Blue",
                        "color_code": null
                    },
                    "attributes": [
                        {
                            "id": 1,
                            "name": "Basas",
                            "value": "basas"
                        },
                        {
                            "id": 3,
                            "name": "High Top",
                            "value": "high-top"
                        },
                        {
                            "id": 6,
                            "name": "Workaday",
                            "value": "workaday"
                        }
                    ],
                    "created_at": "2022-08-24T13:59:02.694196Z",
                    "updated_at": "2022-08-25T01:13:07.836508Z",
                    "name": "Basas Workaday High Top",
                    "order_type": "ready",
                    "attributes_str": "{\"attributes\": \"basas,high-top,Workaday\", \"sizes\": \"s45,s38,s40\", \"color\": \"Blue\"}",
                    "generic_product": 6
                }
            ])
        }, 2000)
    })
}


export {getCatgories, getProducts, getAttributeClasses, filterProducts}
