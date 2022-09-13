
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useRef } from "react"
import { searchProduct } from "../../../../services/productServices"
import useDebounced from "../../../../hooks/useDebounced"
import useClickInside from "../../../../hooks/useClickInside"
import Button from "../../../../components/Button"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const Search = () => {

    const [value, setValue] = useState("")
    const [loading, setLoading] = useState(false)
    const resultRef = useRef()
    const debouncedValue = useDebounced(value, 200)

    const {isClickedInside, containerRef:searchRef} = useClickInside()

    useEffect(() => {
        const search = async () => {

            if (debouncedValue.length < 3) return
            setLoading(true)
            resultRef.current = await searchProduct(debouncedValue)
            setLoading(false)
        }
        
        search()
    }, [debouncedValue])
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className=" relative z-50">
            <label htmlFor="search" 
                className="hidden laptop:flex items-center
                rounded-2xl cursor-pointer transition-all w-full" 
                ref={searchRef}
            >   
                <FontAwesomeIcon icon={faMagnifyingGlass}/>

                <input className="outline-none transition-all bg-transparent ml-2 pl-4 pr-4 pt-2 pb-2  text-white focus:bg-neutral-700 rounded-lg"
                    value={value}
                    onChange={handleChange}
                    id="search"
                />
            </label>
            {value && isClickedInside && 
            <SearchResult 
                searchQuery={value}
                loading={loading}
                items={resultRef.current || []}
            />}
        </div>
    )
}


const SearchResult = ({
    items = [], 
    searchQuery,
    loading,
    ...props
}) => {
    const note = (searchQuery.length < 3) ? `There is no result for '${searchQuery}'`
                : loading ? `Searching for '${searchQuery}...'`
                : items.length? `Result for '${searchQuery}'`
                : `There is no result for '${searchQuery}...'`

    return (
        <div className="absolute z-60 bg-white top-[60px] min-w-[300px] max-w-[400px] pt-2 pb-2 pl-5 pr-5 rounded-2xl shadow-md">
            <ul className="p-0 w-full mb-2">

                <li className="text-sm text-gray-500 flex items-center">
                    <div className="mr-2 w-[30px] h-[30px] flex justify-center items-center">
                        {loading ? <FontAwesomeIcon className=" animate-spin" icon={faSpinner} /> 
                        :<FontAwesomeIcon icon={faSearch} />}
                    </div>
                    <span className="overflow-auto">{note}</span>
                </li>
                <hr></hr>
                {items.map(item => (
                    <SearchItem 
                        name={item.name}
                        link={`/product-detail/${item.id}`}
                        image={item.media.images[0].image}
                    />
                ))}
            </ul>   
        </div>
    )
}

const SearchItem = ({
    image,
    name,
    link="/#",
    ...props
}) => {
    return (
        <li className="text-sm w-full">
            <Button href={link} className="w-full flex items-center text-gray-500 no-underline hover:text-gray-700"
                to={link}
            >
                <div className="w-[40px] h-[40px]">
                    <img className="w-full object-cover rounded" src={image} alt="result"></img>
                </div>
                <span className="pl-3 overflow-hidden w-full text-ellipsis whitespace-nowrap">{name}</span>            
            </Button>
        </li>        
    )

}

export default Search