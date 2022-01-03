import React, { useState, useEffect } from 'react'

import "../component/Trial.css"
import { useGetDiscoverCategories } from '../hooks/useGetDiscoverCategories'
import MovieCard from './MovieCard'

const PopularInAnimation= () => {
    const { results } = useGetDiscoverCategories("16")
   
    return (
        <div>
            <h3 className='text-center mt-5 fw-bold text-white'>Popular In Animation</h3>
            <div className="ccontainer">
                {results && results.map((movie) =><MovieCard key={movie.id} id={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default PopularInAnimation
