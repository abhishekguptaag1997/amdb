import React from 'react'
import PopularInActionAdventure from '../component/PopularInActionAdventure'
import PopularInAnimation from '../component/PopularInAnimation'
import PopularInComedy from '../component/PopularInComedy'
import PopularInDrama from '../component/PopularInDrama'
import TrendingMovieThisWeek from '../component/TrendingMovieThisWeek'
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
            <div className='trending-week'>
                <TrendingMovieThisWeek />
            </div>
            <div className='popular-action-adventure'>
               <PopularInActionAdventure />
            </div>
            <div className='popular-drama'>
               <PopularInDrama />
            </div>
            <div className='popular-comedy'>
               <PopularInComedy />
            </div>
            <div className='popular-animation'>
               <PopularInAnimation />
            </div>
        </div>
    )
}

export default Home
