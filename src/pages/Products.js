
import Banner from "./components/Banner"
import FilterBar from "./components/Filters"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

const ProductPage = (props)  => {

    return (
        <> 
            <Header/> 
            <div className="w-full max-w-[1700px] m-auto">
                <div className="banner w-full pl-2 pr-2 mb-10">
                    <Banner />                
                </div>

                <div className="content w-full pl-4 pr-4 pb-16 tablet:pl-20 tablet:pr-20">
                    <FilterBar />
                    <ProductList />
                </div>                
            </div>

        </>
    )
}

export default ProductPage