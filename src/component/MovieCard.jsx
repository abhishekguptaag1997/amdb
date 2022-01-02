import { motion } from 'framer-motion'
import React from 'react'
import "./Trial.css"


const MovieCard = ({ movie }) => {
    return (
        <>
            <motion.div className="ccard">
                <div className="card-body" >
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="poster" style={{ borderRadius: "0.5rem" }}/>
                </div>
            </motion.div>
        </>
    )
}

export default MovieCard
