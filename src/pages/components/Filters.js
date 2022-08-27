import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faX } from "@fortawesome/free-solid-svg-icons"
import useSmallSreen from '../../hooks/useSmallScreen'
import ReactDOM from "react-dom";
import { useEffect } from "react"
import useModal from "../../hooks/useModal";

const FilterList = [1,2,4,4,4]

const FilterBar = () => {

    const {
        show,
        handleClick, 
        handleClose 
    } = useModal()

    return (
        <div className="pl-3 pr-3 sticky top-0 bg-white mb-8"
        >
            <div className="w-full h-[70px] flex items-center">
                <div className="w-full h-full overflow-x-auto flex gap-3 items-center">
                    <FilterChoice 
                        query="All"
                        primary
                    />
                    {FilterList.map((item, index) => {

                        return (
                            <FilterChoice key={index} />                          
                        )
                    })}
                </div>
                <Button className="w-[50px] h-[50px] hover:rotate-[10deg]"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faFilter}/>
                </Button>
            </div>
            {show && 
            <FilterMenu handleClose={handleClose} />}
    
        </div>
    )
}

const FilterChoice = ({primary, query,...props}) => {

    return (
        <Button className={`transition-all text-lg font-semibold pt-2 pb-2 pl-6 pr-6
                ${primary? "bg-blue-400 text-white hover:bg-blue-500" : "bg-gray-200 hover:bg-gray-300"} rounded-3xl`}
        >
           {query || "Hello"}
       </Button>    
    )
}

const FilterMenu = ({handleClose,...props}) => {
    
    const isMobile = useSmallSreen(640)
    useEffect(() => {
        if (!isMobile) return
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [isMobile])
    
    return ReactDOM.createPortal(
        <div className={`fixed flex flex-col z-40 bg-white shadow-md rounded-2xl
                ${isMobile?"inset-0": "top-0 right-0 w-[300px] h-[100vh]"} p-4`}    
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-3xl">Filter</h3>
                <Button
                    onClick={handleClose}
                >
                    <FontAwesomeIcon icon={faX}/>
                </Button>
            </div>
            <div className="h-full w-full p-1 overflow-y-auto">
                <div className="mb-4">
                    <h4 className="mb-3 text-xl">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cate</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catead</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catesadfasdf</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catde</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cte</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">csdfsdate</Button>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="mb-3 text-xl">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cate</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catead</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catesadfasdf</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catde</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cte</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">csdfsdate</Button>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="mb-3 text-xl">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cate</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catead</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catesadfasdf</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catde</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cte</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">csdfsdate</Button>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="mb-3 text-xl">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cate</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catead</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catesadfasdf</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">catde</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">cte</Button>
                        <Button className="pl-3 text-lg pr-3 pt-1 pb-1 border rounded-2xl">csdfsdate</Button>
                    </div>
                </div>
            <div className="">
                <h4 className="mb-3 text-xl">Categories</h4>
                <div className="grid grid-cols-2 gap-3">
                    <input className="pt-2 pb-2 pl-4 pr-4 bg-gray-200 rounded-2xl text-lg "
                        placeholder="Min price"
                    />
                    <input className="pt-2 pb-2 pl-4 pr-4 bg-gray-200 rounded-2xl text-lg "
                        placeholder="Max price"
                    />
                </div>

            </div>

            </div>

            <div className="mt-8">
                <Button className="w-full rounded-2xl bg-blue-400 hover:bg-blue-500 transition-all
                pl-3 pr-3 pt-2 pb-2 font-semibold text-xl text-white text-center">
                    Done
                </Button>
            </div>
        </div>
    , document.querySelector('body'))
}

export default FilterBar
