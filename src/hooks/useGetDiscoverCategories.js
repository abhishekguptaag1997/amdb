import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";


export const useGetDiscoverCategories = (genreId) => {
    const [results, setResults] = useState()
    const [error, setError] = useState()
    const [pending, setPending] = useState(true)

    const BASEURL = "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&region=IN&api_key"
    //https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&api_key=802f2cc35253cb99efe6d36dc71ba39d&with_genres=10752
    useEffect(() => {
        const getResults = () => {
            const URL = BASEURL+"="+apiKey+"&with_genres="+genreId
            axios.get(URL).then((res) => {
                setPending(true)
                // console.log(res.data.results)
                setResults(res.data.results)
                setPending(false)
            }, (err) => {
                console.log(err)
                setError(err.message)
                setPending(true)
            })
        }
        getResults()
    }, [genreId])
    return { results, error, pending }
}
