


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


export {getCatgories, getAttributeClasses}
