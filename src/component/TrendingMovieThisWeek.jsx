import React, { useState, useEffect } from 'react'
import { useGetTrending } from '../hooks/useGetTrending'
import "../component/Trial.css"
import MovieCard from './MovieCard'

const TrendingMovieThisWeek = () => {
    const { results } = useGetTrending("movie", "week")
   
    return (
        <div>
            <h3 className='text-center mt-5 fw-bold text-white'>Trending Movies This Week</h3>
            <div className="ccontainer">
                {results && results.map((movie) =><MovieCard key={movie.id} id={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default TrendingMovieThisWeek
