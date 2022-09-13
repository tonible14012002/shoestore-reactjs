import Button from "../../../components/Button"
import Search from "./components/Search"
import Menu from "../Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faHeart, faUser, faChevronDown, faShoePrints } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

    return (
        <div className="header-wrapper mb-5 laptop:mb-7 w-full h-[70px] font-semibold transition-all bg-white text-black shadow-sm"
        >
            <div className="header grid grid-cols-3 pl-5 pr-5 w-full h-full 
                            tablet:pl-20 tablet:pr-20 ">
                <div className="header__group h-full flex items-center gap-2">
                    <Menu />
                    <Search />
                </div>

                <div className="header__group h-full flex items-center justify-center">
                    <Button href="/" className="h-full text-center leading-[70px] text-3xl"
                        to=""
                    >
                        <FontAwesomeIcon icon={faShoePrints} />
                        <span className="ml-1">Tony</span>
                    </Button>
                </div>

                <div className="header__group h-full flex items-center justify-end gap-10">
                    <div className="header__subgroup flex gap-4">
                        <Button className="hidden laptop:flex cursor-pointer rounded-2xl items-center justify-center gap-1 text-sm" >
                            <FontAwesomeIcon icon={faHeart} />
                        </Button>
                    </div>
                    <div className="header__subgroup flex gap-2">
                        <Button  className="cursor-pointer rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center justify-center gap-2 text-sm border">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
                        </Button>
                        <Button className="cursor-pointer rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center justify-center gap-2 text-sm border">
                            <FontAwesomeIcon icon={faUser} />
                            <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Header