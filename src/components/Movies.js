import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context'


function Movies() {


    const { movies } = useGlobalContext();

    return (
        <div className="container my-4">
            <div className="row gx-sm-1 gx-lg-5">

                {
                    movies.map((movie) => {
                        return (
                            <Link to={`/movie/${movie.imdbID}`} className="col-lg-3 col-md-4 col-sm-12 mt-4 text-decoration-none" key={movie.imdbID}>
                                <div className="card">
                                    <img src={movie.Poster} className="p-3" height="360px" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"> {movie.Title}</h5>
                                        <p className="card-text">{movie.Type} {movie.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Movies