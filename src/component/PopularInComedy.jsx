import React, { useState, useEffect } from 'react'

import "../component/Trial.css"
import { useGetDiscoverCategories } from '../hooks/useGetDiscoverCategories'
import MovieCard from './MovieCard'

const PopularInComedy= () => {
    const { results } = useGetDiscoverCategories("35")
   
    return (
        <div>
            <h3 className='text-center mt-5 fw-bold text-white'>Popular In Comedy</h3>
            <div className="ccontainer">
                {results && results.map((movie) =><MovieCard key={movie.id} id={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default PopularInComedy
