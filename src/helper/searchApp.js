
// key
//e36ceaefdd41ed290d2c6d22444e3f6c

import axios from "axios"

// https://api.themoviedb.org/3/movie/550?api_key=e36ceaefdd41ed290d2c6d22444e3f6c

// v4 auth
//  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzZjZWFlZmRkNDFlZDI5MGQyYzZkMjI0NDRlM2Y2YyIsInN1YiI6IjYyZmIxNDUyMjU4ODIzMDA3ZjYxMWQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GGOeTq7AZ6aV9eY2plcGih89Z2FN_p8h9ioWXViAXTg

function getMovies (query="", page=1) {
    if (!query) query=""
    return axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: 'e36ceaefdd41ed290d2c6d22444e3f6c',
            query : `'${query}'`,
            page
        }
    }).then (resp => resp.data)
}

function getImageRoot () {
    return "https://image.tmdb.org/t/p/original"
}

export {getMovies, getImageRoot}