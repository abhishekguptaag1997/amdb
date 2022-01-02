import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import { apiKey } from "../apiKey";


export const useGetTrending = (media_type, time_window) => {
    const [results, setResults] = useState()
    const [error, setError] = useState()
    const [pending, setPending] = useState(true)

    const BASEURL = "https://api.themoviedb.org/3/trending/"
    //  https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
    useEffect(() => {
        const getResults = () => {
            const URL = BASEURL + "/" + media_type + "/" + time_window + "?api_key=" + apiKey
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
    }, [media_type, time_window])
    return { results, error, pending }
}
