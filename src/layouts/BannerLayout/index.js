import Header from "../defaultLayout/Header"
import MiniCart from "../defaultLayout/MiniCart"
import Banner from "./Banner"

const BannerAddedLayout
 = ({children}) => {

    return (
        <div> 
            <Header/> 
            <div className="w-full max-w-[1700px] m-auto">
                <div className="banner w-full pl-2 pr-2 mb-10">
                    <Banner />                
                </div>

                <div className="content w-full pl-4 pr-4 pb-16 tablet:pl-20 tablet:pr-20">
                    {children}
                    <MiniCart />
                </div>
            </div>
        </div>
    )
}

export default BannerAddedLayout
