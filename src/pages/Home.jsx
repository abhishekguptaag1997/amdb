import React from 'react'
import TrendingMovieToday from '../component/TrendingMovieToday'
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className="home-content">
                <span className='display-4 ms-5 text-white'>Search for millions of movies...</span>
                <div className='search-div text-center mt-5'>
                    <label >
                        <form >
                            <input className='form-control text-center search-text fs-4' type="text" placeholder="search for movie, tv show" name="" id="" />
                            <button className="btn-md btn btn-outline-light mt-2">Search</button>
                        </form>
                    </label>
                </div>
            </div>
            <div className='trending-today'>
               <TrendingMovieToday />
            </div>
        </div>
    )
}

export default Home
