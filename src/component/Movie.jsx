import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieData } from '../hooks/useGetMovieData'


const Movie = () => {
    let { id } = useParams()
    const { results, pending } = useGetMovieData(id)
    const [movieData, setMovieData] = useState()

    useEffect(() => {
        if (results) {
            setMovieData(results)
        }
    }, [pending])
    // const movieBackdropURL = "https://image.tmdb.org/t/p/w500" + movieData.backdrop_path

    return (<>
        {movieData && <div>
            <div className="container-fluid" >
                <div className="row mt-3" style={{ background: `url(https://image.tmdb.org/t/p/w500${movieData.backdrop_path}) no-repeat `,backgroundSize:"100%",height:"86vh"}}>
                <div className="col-3" >
                            <img  src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt="Movie poster" style={{marginTop:"10vh",borderRadius:"1rem",boxShadow:"0px 0px 30px 5px #121212"}}/>
                        </div>
                    <div className="col-9 p-0" >
                        <div className="container-fluid text-white" style={{marginTop:"10vh", height:"20vh",background:"#0210147c"}}>
                            <h1 className='display-5' style={{fontFamily:"initial"}}>{movieData.original_title}(2019)</h1>
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col">
                        similar here
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

export default Movie
