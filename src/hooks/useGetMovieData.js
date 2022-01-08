
import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";


export const useGetMovieData = (movieId) => {
    const [results, setResults] = useState()
    const [error, setError] = useState()
    const [pending, setPending] = useState(true)

    const BASEURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`
    //  https://api.themoviedb.org/3/movie/429617?language=en-US&api_key=802f2cc35253cb99efe6d36dc71ba39d
    useEffect(() => {
        const getResults = () => {
            const URL = BASEURL
            // console.log(URL)
            axios.get(URL).then((res) => {
                setPending(true)
                // console.log(res.data.results)
                setResults(res.data)
                setPending(false)
            }, (err) => {
                console.log(err)
                setError(err.message)
                setPending(true)
            })
        }
        getResults()
    }, [movieId])
    return { results, error, pending }
}
