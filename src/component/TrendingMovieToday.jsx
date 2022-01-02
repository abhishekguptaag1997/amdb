import React, { useState, useEffect } from 'react'
import { useGetTrending } from '../hooks/useGetTrending'
import "../component/Trial.css"
import MovieCard from './MovieCard'

const TrendingMovieToday = () => {
    const { results } = useGetTrending("movie", "day")
   
    return (
        <div>
            <div className="ccontainer bg-dark ">
                {results && results.map((movie) =><MovieCard movie={movie} />)}
            </div>
        </div>
    )
}

export default TrendingMovieToday
