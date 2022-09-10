
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect, useRef } from "react"
import { searchProduct } from "../../../../services/productServices"
import useDebounced from "../../../../hooks/useDebounced"
import useClickInside from "../../../../hooks/useClickInside"
import Button from "../../../../components/Button"

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
                className="hidden laptop:flex items-center pl-4 pr-4 pt-2 pb-2 bg-gray-200 
                rounded-2xl cursor-pointer transition-all w-full"
                ref={searchRef}
            >   
                <svg className="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.264969 16.395L4.45396 11.939C3.37303 10.6223 2.78367 8.97062 2.78694 7.26704C2.81824 5.86812 3.26168 4.50953 4.06169 3.36152C4.86171 2.21351 5.98273 1.32713 7.28429 0.813425C8.58584 0.299721 10.0101 0.181546 11.3785 0.473704C12.7469 0.765861 13.9987 1.45537 14.977 2.45582C15.9553 3.45627 16.6166 4.72316 16.878 6.09779C17.1394 7.47241 16.9894 8.89363 16.4467 10.1834C15.9039 11.4731 14.9926 12.5739 13.827 13.348C12.6614 14.1221 11.2932 14.535 9.89397 14.535C8.43174 14.5372 7.0063 14.0766 5.82195 13.219L1.60097 17.708C1.51761 17.7975 1.41709 17.8693 1.30544 17.9193C1.19378 17.9692 1.07326 17.9961 0.950974 17.9985C0.828692 18.001 0.707162 17.9788 0.593613 17.9334C0.480064 17.8879 0.376805 17.8201 0.289963 17.734C0.113332 17.5574 0.0120327 17.3192 0.00737047 17.0695C0.00270824 16.8198 0.0950526 16.5781 0.264969 16.395ZM9.89397 1.89503C8.82646 1.87118 7.77604 2.16589 6.87679 2.74165C5.97753 3.3174 5.27021 4.14807 4.84511 5.12757C4.42001 6.10708 4.29642 7.19103 4.49007 8.2411C4.68372 9.29117 5.18583 10.2597 5.93236 11.0231C6.67889 11.7866 7.63594 12.3103 8.68141 12.5274C9.72688 12.7445 10.8134 12.6453 11.8021 12.2422C12.7909 11.8391 13.6372 11.1506 14.2329 10.2645C14.8287 9.37834 15.1469 8.33481 15.147 7.26704C15.1598 5.85959 14.6142 4.5044 13.6298 3.49842C12.6454 2.49245 11.3023 1.91771 9.89494 1.90003L9.89397 1.89503Z" fill="#677585"/>
                </svg>

                <input className="outline-none bg-transparent ml-2 text-gray-600"
                    value={value}
                    onChange={handleChange}
                    id="search"
                />
                {console.log(isClickedInside, searchRef)}
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