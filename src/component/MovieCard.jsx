import { motion } from 'framer-motion'
import React from 'react'
import { getMovieGenreByGenreId } from '../genres/movieGenres'
import "./Trial.css"



const MovieCard = ({id,movie}) => {
    const moviePosterURL = "https://image.tmdb.org/t/p/w200" + movie.poster_path
    const getMovieDate = () => {
        return movie.release_date.substring(0, 4)
    }
    return (
        <>
            <motion.div className="ccard" whileHover={{ scale: 1.2 }}
                style={{ background: `url(${moviePosterURL}) no-repeat` }}>
                <div className="container-fluid" style={{ paddingBottom: "0" }}>
                    <div className="row text-white">
                        <div>
                            <span className='bg-dark ms-1 mt-1 text-center text-white fw-bold' style={{ width: "25px", padding: "0", border:"1px groove #121212",borderRadius: "0.3rem", fontFamily: "serif", float: "left" }} >
                                {movie.vote_average}
                            </span>
                            {movie.adult && <span className='text-white ms-1 mt-1 ' style={{ width: "25px", padding: "0", borderRadius: "0.3rem", fontFamily: "serif", float: "right", backgroundColor: "rgba(15, 13, 13, 0.342)" }}>18+</span>}
                        </div>
                    </div>

                    <div className="row" style={{ height: "20vh" }}></div>

                    <div className="row movie-text" >
                        <span className='text-white fw-bold' style={{ whiteSpace: "initial" }}>
                            {movie.title}
                        </span>
                        <span className='text-white' style={{ whiteSpace: "initial" }}>
                            {movie.genre_ids.map((id) => {
                                let genre = getMovieGenreByGenreId(id)
                                return <span>{genre + ", "}</span>
                            })}
                            {getMovieDate()}
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default MovieCard


// _______________________________________________________________________________________________________
// import { motion } from 'framer-motion'
// import React from 'react'
// import "./Trial.css"


// const MovieCard = ({ movie }) => {
//     const moviePosterURL = "https://image.tmdb.org/t/p/w200"+movie.poster_path
//     return (
//         <>
//             <motion.div className="ccard" style={{background:`url(${moviePosterURL}) no-repeat`}}>
//                     {/* <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="poster" style={{ borderRadius: "0.5rem" }}/> */}
//             </motion.div>
//         </>
//     )
// }

// export default MovieCard
