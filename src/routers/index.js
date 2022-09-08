import HomePage from "../pages/Home"
import Product from "../pages/Product"
import BannerAddedLayout from "../layouts/BannerLayout"
import ProductDetail from "../pages/ProductDetail"

const publicRoutes = [
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'product-list',
        component: Product,
        layout: BannerAddedLayout,
    },
    {
        path: 'product-detail/:id',
        component: ProductDetail,
    }
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}