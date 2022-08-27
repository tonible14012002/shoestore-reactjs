import { Fragment, useEffect, useState } from "react"
import * as MovieService from "../../helper/searchApp"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import LoadingSkeleton from "../LoadingSkeleton"
import Header from "../Header"

const MoviesSeachApp = () => {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [movies, setMovies] = useState([])

    const handleInputChange = (e) => {
        if (!e.target.value.startsWith(' '))
            setSearchValue(e.target.value)
    }

    const handleButtonOnClick = (e) => {
        e.preventDefault()
        if (searchValue.length < 3) return
        setQuery(searchValue)
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await MovieService.getMovies(query)
            const promise = new Promise(resolve => {
                setTimeout(()=>{resolve()}, 1000)
            })
            await promise
            setMovies(data.results)
            setLoading(false)
        }

        getData()
    }, [query])

    return (
        <Fragment>
            <Header />
            <div className="w-full h-full p-10 flex">
                <div className="flex flex-col items-center w-full">
                    <form className="flex w-full items-center justify-between
                            outline outline-1 text-gray-600
                            md:w-[600px] lg:w-[800px]"
                    >
                        <input 
                            className="p-3 pr-5 w-full outline-none"
                            placeholder="Search your movies..."
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        <div className="h-full w-20 flex items-center justify-center">
                            {loading && <i className="loading animate-spin
                                w-5 h-5 border-dotted border-2 border-sky-500 rounded-full"
                            ></i>}     
                            {!loading && 
                            <button 
                                className={`w-full transition-all h-full text-white  
                                ${searchValue.length >= 3? "hover:bg-blue-600 bg-blue-500" : "bg-blue-300 cursor-auto"} `}
                                onClick={handleButtonOnClick}
                                >
                                Search
                            </button>}
                        </div>
                    </form>

                    <div className="w-full h-ful mt-4
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                        {loading &&
                            <>
                            <LoadingSkeleton className="p-3 h-[300px] w-full"/>
                            <LoadingSkeleton className="p-3 h-[300px] w-full"/>
                            <LoadingSkeleton className="p-3 h-[300px] w-full"/>
                            </>
                        }    

                        {!loading && !!movies.length &&
                        movies.filter((movie) => (movie.poster_path && movie.title))
                        .map(movie => {
                            let posterUrl
                            if (!movie.poster_path || !movie.poster_path.length){
                                posterUrl = `https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/131681342_2866175253647329_5040552893130085488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=EL-W7MiKfx8AX9KNRX4&_nc_ht=scontent.fsgn8-3.fna&oh=00_AT8iILLXRcC6iDQIU86p4jvvilsN__00cxoh0rU25pZb-A&oe=632228D6`

                            }
                            else {
                                posterUrl = MovieService.getImageRoot() + "/" + movie.poster_path
                            }
                            return (
                            <MovieItem 
                                key={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                rating={movie.vote_average}
                                posterUrl={posterUrl}
                            />
                        )})}
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

const MovieItem  = ({
    title,
    overview,
    posterUrl, 
    rating
}) => {

    if (!posterUrl || !posterUrl.length) {
        posterUrl = `https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/131681342_2866175253647329_5040552893130085488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=EL-W7MiKfx8AX9KNRX4&_nc_ht=scontent.fsgn8-3.fna&oh=00_AT8iILLXRcC6iDQIU86p4jvvilsN__00cxoh0rU25pZb-A&oe=632228D6`
    }

    if (overview.length > 200) {
        overview = overview.substring(0,200) + "..."
    }

    return (
        <div className="bg-white p-3 shadow-sm">
            <div className="h-[300px] w-full">
                <img  className="w-full h-full object-cover rounded-lg"
                    src={posterUrl}
                    alt={title}
                />                
            </div>
            <div className="p-3">
                <h3 className="font-semibold mb-2 text-xl">{title}</h3>
                <p className="text-gray-600 text-sm mb-6">{overview}</p>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center w-fit">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span className="text-sm font-bold">{rating}</span>                    
                </div>
            </div>
        </div>
    )
}



export default MoviesSeachApp