import { useState, useEffect, useRef } from "react"
import useDebounced from "./useDebounced"
import axios from "axios"

const newsService = (query) => {
    return axios.get('https://hn.algolia.com/api/v1/search', {
        params:{query}
    })
    .then(resp => {
        return resp.data.hits
    })
}


export default function useHackerNews() {

    const [hits, setHits] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const debouncedQuery = useDebounced(query, 1000)

    const isMounted = useRef(false)
    useEffect(() => {
        isMounted.current = true
        return () => {isMounted.current = false}
    }, [])

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }

    const searchNews = useRef()
    searchNews.current = async () => {
        setLoading(true)
        try {
            const result = await newsService(debouncedQuery)
            if (isMounted) setHits(result || [])            
        }
        catch (errors){
            setErrorMessage(errors)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log('searching...')
        searchNews.current()
    }, [debouncedQuery])

    return {
        hits, query, loading, errorMessage, debouncedQuery, handleOnChange
    }

}