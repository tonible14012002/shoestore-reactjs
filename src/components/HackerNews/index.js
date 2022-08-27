
import useHackerNews from "../../hooks/useHackerNews"

const HackerNews = () => {

    const {hits, query, loading, errorMessage, handleOnChange} = useHackerNews()

    return (
        <div className="w-2/4 mx-auto shadow-md">
            <div className="py-10 px-5">
                <input 
                    className="border w-100 p-2 w-full transition-all focus:border-blue-500"
                    onChange={handleOnChange}
                    value={query}
                />
            </div>
            {loading && <div className=" rounded-full w-8 border-blue-500 border-4 border-r-4x
            border-r-transparent animate-spin">       </div>}
            {!!errorMessage && <p>error: {errorMessage}</p>}
            <ul className="px-5 flex flex-wrap gap-3 pb-5"
            >
                {!!hits.length && 
                hits.map((hit, index) => {
                    if (!hit.title) return null
                    return (
                        <li key={index} className="bg-gray-300 rounded-md p-1">
                            {hit.title}
                        </li>                        
                    )
                })}
            </ul>
        </div>
    )
}


export default HackerNews